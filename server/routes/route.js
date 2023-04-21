import { Router } from "express";
import express from "express";
import { addShop,getShops,getShop,editShop,deleteShop } from "../controller/shop-controller.js";

const router = express.Router();

router.post('/add',addShop)
router.get('/all',getShops)
router.get('/edit/:id',getShop)
router.post('/edit/:id',editShop)
router.delete('/:id',deleteShop)



export default router;