import HttpStatus from 'http-status-codes';
import * as CartService from '../services/wishlist.service';

export const addwishlist = async (req, res, next) => {
    try {
      const data = await CartService.addwishlist(req.params._id,req.body);
      res.status(HttpStatus.OK).json({
        code: HttpStatus.OK,
        data: data,
        message: 'Book added to wishlist successfully'
      });
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json({
        code: HttpStatus.BAD_REQUEST,
        message:`${error}`
    })
  }
  };

  export const wishlistBooks = async (req, res, next) => {
    try {
      const data = await CartService.wishlistBooks(req.params._id,req.body);
      res.status(HttpStatus.OK).json({
        code: HttpStatus.OK,
        data: data,
        message: 'Fetched all books successfully from wishlist'
      });
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json({
        code: HttpStatus.BAD_REQUEST,
        message:`${error}`
    })
  }
  };

  export const removeBook = async (req, res, next) => {
    try {
      const data = await CartService.removeBook(req.params._id,req.body);
      res.status(HttpStatus.OK).json({
        code: HttpStatus.OK,
        data: data,
        message: 'Book removed Successfully from wishlist'
      });
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json({
        code: HttpStatus.BAD_REQUEST,
        message:'Book does not exist'
    })
  }
  };