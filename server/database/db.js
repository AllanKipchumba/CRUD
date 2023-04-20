import mongoose from "mongoose"


const conection = async ()=>{
//     enter youre mongodb   url 
    const URL =`mongodb`

    try {
       await  mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
       console.log('connected successfully');
    }
    catch(error){
        console.log(error,'hi')
    }
}


export default conection ;
