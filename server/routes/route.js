import { Router } from "express";
import express from "express";
import { addShop } from "../controller/shop-controller.js";

const router = express.Router();

router.post('/add',addShop)

export default router;