import express from "express";
import * as cartController from '../controllers/cart.controller';
import { userAuth } from '../middlewares/auth.middleware';
import { redisAuth } from "../middlewares/redis.middleware";

const router = express.Router();

//creating the cart
router.post('/:_id',userAuth,cartController.addCart)

//get all books from cart
router.get('',userAuth,redisAuth, cartController.cartBooks)

//updating cart qunatity
router.put('/:_id',userAuth,cartController.updateQty)

//deleting the book
router.delete('/:_id',userAuth,cartController.deleteBook)

//purchasing a book
router.put('/:_id/isPurchased', userAuth, cartController.purchased);

export default router;