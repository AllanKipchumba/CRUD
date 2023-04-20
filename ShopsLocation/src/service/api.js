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