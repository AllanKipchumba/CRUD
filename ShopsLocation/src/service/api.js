import axios from "axios";
const URL = 'http://localhost:8000';

export const  addShop = async (data)=>{
    try{
      return await axios.post(`${URL}/add`,data);
    }
    catch(error){
        console.log(error);
    }
}

export const getShops = async ()=>{
  try{
    return  await axios.get(`${URL}/all`);
 
  }
  catch(error){
      console.log(error);
  }
}
export const getShop = async (id)=>{
  try{
    return  await axios.get(`${URL}/edit/${id}`);
 
  }
  catch(error){
      console.log(error);
  }
}
export const editShop = async (data,id)=>{
  try{
    return  await axios.post(`${URL}/edit/${id}`,data);
 
  }
  catch(error){
      console.log(error);
  }
}
export const deletShop = async (id) => {
  try {
    return await axios.delete(`${URL}/${id}`);
  } catch (error) {
    console.log(error);
  }
}