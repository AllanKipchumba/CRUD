import mongoose from "mongoose"


const conection = async ()=>{
    const URL =`{paste the mongo db cluster url}`

    try {
       await  mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
       console.log('connected successfully');
    }
    catch(error){
        console.log(error,'hi')
    }
}


export default conection ;
