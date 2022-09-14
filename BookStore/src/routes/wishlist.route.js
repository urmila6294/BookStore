import express from "express";
import * as cartController from '../controllers/wishlist.controller';
import { userAuth } from '../middlewares/auth.middleware';

const router = express.Router();

//creating the wishlist
router.post('/:_id',userAuth,cartController.addwishlist)

//get all books from wishlist
router.get('',userAuth,cartController.wishlistBooks)

//removing the book from wishlist
router.delete('/:_id',userAuth,cartController.removeBook)



export default router;