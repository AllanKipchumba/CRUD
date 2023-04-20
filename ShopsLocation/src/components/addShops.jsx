import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { addShop } from '../service/api';

const initvalues ={
  name: '',
  coordinates: ['', ''],
  category: ''
}

export default function AddShops() {




  const [shop, setShop] = useState(initvalues);
    const { name,coordinates, category } = shop;
    
    let navigate = useNavigate();

    
  const onValueChange = (e) => {
    const { name, value } = e.target;

    if (name === 'lon' || name === 'lat') {
      const newCoordinates = [...coordinates];
      newCoordinates[name === 'lon' ? 0 : 1] = value;
      setShop({ ...shop, coordinates: newCoordinates });
    } else {
      setShop({ ...shop, [name]: value });
    }
  };

  const addShopDetails = async () => {
    await addShop({
      ...shop,
      coordinates: [parseFloat(coordinates[0]), parseFloat(coordinates[1])]
    });
    navigate('/all');
  };
  return (
    <>
  <div>

   <input type="text" placeholder='name' name='name' onChange={(e) => onValueChange(e)} value={name} /><input placeholder='lon' type="text" name='lon' onChange={(e) => onValueChange(e)} value={coordinates[0]} /><input placeholder='lat' type="text" name='lat' onChange={(e) => onValueChange(e)} value={coordinates[1]}/><input placeholder='category' type="text" name='category' onChange={(e) => onValueChange(e)} value={category} />
   <button variant="contained" color="primary" onClick={() => addShopDetails()}>Add User</button>
  </div>

    </>
  )
}
