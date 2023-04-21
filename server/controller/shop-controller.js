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

export const getShops = async (req, res) =>{

    try{
        const shops = await Shop.find();
        res.status(200).json(shops);
    }catch  (err){ 
        res.status(404).json(err);

    }
}

export const getShop = async (req, res) =>{

    try{
        // const shop = await Shop.find({_id:req.params.id});
        const shop = await Shop.findById(req.params.id)
        res.status(200).json(shop);
    }catch  (err){ 
        res.status(404).json(err);

    }
}
export const editShop = async (req, res) =>{
    let shop = req.body;        
    const editShop = new Shop(shop)
    try{
     await Shop.updateone({_id:req.params.id,editShop})
        res.status(200).json(editShop);
    }catch  (err){ 
        res.status(404).json(err);

    }
}
export const deleteShop = async (req, res) =>{
   
    try{
     await Shop.deletone({_id:req.params.id})
        res.status(200).json(editShop);
    }catch  (err){ 
        res.status(409).json(err);

    }
}