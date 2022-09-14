import HttpStatus from 'http-status-codes';
import * as CartService from '../services/cart.service';

export const addCart = async (req, res, next) => {
    try {
      const data = await CartService.addCart(req.params._id,req.body);
      res.status(HttpStatus.OK).json({
        code: HttpStatus.OK,
        data: data,
        message: 'Book added to cart successfully'
      });
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json({
        code: HttpStatus.BAD_REQUEST,
        message:`${error}`
    })
  }
  };

  export const cartBooks = async (req, res, next) => {
    try {
      const data = await CartService.cartBooks(req.params._id,req.body);
      res.status(HttpStatus.OK).json({
        code: HttpStatus.OK,
        data: data,
        message: 'Fetched all books successfully from cart'
      });
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json({
        code: HttpStatus.BAD_REQUEST,
        message:`${error}`
    })
  }
  };

  export const updateQty = async (req, res, next) => {
    try {
      const data = await CartService.updateQty(req.params._id,req.body);
      res.status(HttpStatus.OK).json({
        code: HttpStatus.OK,
        data: data,
        message: 'Book Quantity Increased by 1'
      });
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json({
        code: HttpStatus.BAD_REQUEST,
        message:`${error}`
    })
  }
  };

  export const deleteBook = async (req, res, next) => {
    try {
      const data = await CartService.deleteBook(req.params._id,req.body);
      res.status(HttpStatus.OK).json({
        code: HttpStatus.OK,
        data: data,
        message: 'Book Deleted Successfully'
      });
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json({
        code: HttpStatus.BAD_REQUEST,
        message:'Book does not exist'
    })
  }
  };

  export const purchased = async(req,res,next) =>{
    try{
        const data = await CartService.purchased(req.params._id,req.body);
        res.status(HttpStatus.ACCEPTED).json({
            code: HttpStatus.ACCEPTED,
            data:data,
            message: 'Order successfully placed'
        });
    }catch (error) {
        res.status(HttpStatus.BAD_REQUEST).json({
            code: HttpStatus.BAD_REQUEST,
            message: `${error}`
        });

    }
}

