import React, { useEffect, useState } from 'react'
import { deletShop, getShops } from '../service/api'
import { Link } from 'react-router-dom';

export default function AllShops() {
    const [Shops,setShops]= useState([]);
    useEffect(()=>{
 getAllShops()
    },[])

    const getAllShops = async ()=>{
      let response =  await getShops();
      setShops(response.data)
      console.log(Shops)
    }
    const delShop = async (id)=>{
        await deletShop(id)
    }
  return (
<>
<table>
    <thead>
    <tr>
        <th>id</th>
        <th>name</th>
        <th>cordinates</th>
        <th>category</th>

    </tr>
    </thead>
   <tbody>


 {
    Shops.map((shop,index)=>{
        return(
            <tr key={index} id={index} >
                <td>{shop._id}</td>
                <td>{shop.name}</td>
                <td>{` [${shop.location.coordinates[0],' ' ,shop.location.coordinates}]`}</td>
                <td>{shop.category}</td>
                <Link to={`/edit/${shop._id}`}>  <button >Edit</button></Link>
              
               <button onClick={()=>{
                delShop(shop._id)
               }} >Delet</button>
          

            </tr>
        )
    })
 }
  
   </tbody>
  
</table>



</>
  )
}
