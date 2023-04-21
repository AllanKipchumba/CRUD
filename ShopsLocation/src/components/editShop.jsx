// import React, { useEffect, useState } from 'react'
// import { useNavigate, useParams } from 'react-router-dom';
// import { addShop,getShop } from '../service/api';
// import Shop from '../../../server/schema/shop-schema.js';

// const initvalues ={
//   name: '',
//   coordinates: [],
//   category: ''
// }

// export default function EditShops() {




//   const [shop, setShop] = useState(initvalues);
//     const { name,coordinates, category } = shop;
    
//     let navigate = useNavigate();
// const {id} = useParams();
//     useEffect(()=>{
//         loadShopDetails();
//     },[]);
//     const loadShopDetails = async () => {
//         const response = await getShop(id);
//         setShop(response.data)
//     }

//     const onValueChange = (e) => {
//       if (e.target.name === 'lon' || e.target.name === 'lat') {
//         const newCoords = [...coordinates];
//         newCoords[e.target.name === 'lon' ? 0 : 1] = e.target.value;
//         setShop({...shop, coordinates: newCoords });
//       } else {
//         setShop({...shop, [e.target.name]: e.target.value});
//       }
//     }
  
//     const addShopDetails = async() => {
//       const newShop = new Shop({
//         name,
//         location: {
//           type: 'Point',
//           coordinates: [parseFloat(coordinates[0]), parseFloat(coordinates[1])]
//         },
//         category
//       });
//       await addShop(newShop);
//       navigate('/all');
//     }
//   return (
//     <>
//   <div>

//    <input type="text" placeholder='name' name='name' onChange={(e) => onValueChange(e)} value={shop.name} /><input placeholder='lon' type="text" name='lon' onChange={(e) => onValueChange(e)}  /><input placeholder='lat' type="text" name='lat' onChange={(e) => onValueChange(e)}/><input placeholder='category' type="text" name='category' onChange={(e) => onValueChange(e)} value={shop.category} />
//    <button variant="contained" color="primary" onClick={() => addShopDetails()}>Edit Shop</button>
//   </div>

//     </>
//   )
// }




import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { addShop, editShop, getShop } from '../service/api';
import Shop from '../../../server/schema/shop-schema.js';

const initValues ={
  name: '',
  coordinates: [],
  category: ''
}

export default function EditShop() {

  const [shop, setShop] = useState(initValues);
  const { name, coordinates, category } = shop;

  let navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    loadShopDetails();
  }, []);

  const loadShopDetails = async () => {
    const response = await getShop(id);
    setShop(response.data);
    console.log(response.data)
  }

  const onValueChange = (e) => {
    if (e.target.name === 'lon' || e.target.name === 'lat') {
      const newCoords = coordinates ? [...coordinates] : [];
      newCoords[e.target.name === 'lon' ? 0 : 1] = e.target.value;
      setShop({ ...shop, coordinates: newCoords });
    } else {
      setShop({ ...shop, [e.target.name]: e.target.value });
    }
  }

  const editShopDetails = async () => {
    const newShop = new Shop({
      name,
    //   location: {
    //     type: 'Point',
    //     coordinates: [parseFloat(coordinates[0]), parseFloat(coordinates[1])]
    //   },
      category
    });
    await editShop(newShop,id);
    navigate('/all');
  }

  return (
    <>
      <div>
        <input type="text" placeholder='name' name='name' onChange={(e) => onValueChange(e)} value={name} />
        {/* <input placeholder='lon' type="text" name='lon' onChange={(e) => onValueChange(e)} value={coordinates ? coordinates[0] : ''} />
        <input placeholder='lat' type="text" name='lat' onChange={(e) => onValueChange(e)} value={coordinates ? coordinates[1] : ''} /> */}
        <input placeholder='category' type="text" name='category' onChange={(e) => onValueChange(e)} value={category} />
        <button variant="contained" color="primary" onClick={() => editShopDetails()}>Edit Shop</button>
      </div>
    </>
  )
}
