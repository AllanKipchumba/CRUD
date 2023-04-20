import Shop from '../schema/shop-schema.js'

export const addShop = async (req, res) =>{
    const shop = req.body;
    const newShop = new Shop(shop);
    try{
       await newShop.save();
       res.status(201).json(newShop);
        
    }
    catch(err){
         res.status(409).json(err);
    }
}