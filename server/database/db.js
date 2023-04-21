import mongoose from "mongoose"


const conection = async ()=>{
    const URL =`mongodb+srv://wildlyelite:k6y6LGPbOu6kONt8@crud-app.7ifnyi6.mongodb.net/?retryWrites=true&w=majority`

    try {
       await  mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
       console.log('connected successfully');
    }
    catch(error){
        console.log(error,'hi')
    }
}


export default conection ;