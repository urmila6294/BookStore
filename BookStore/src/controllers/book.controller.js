import HttpStatus from 'http-status-codes';
import * as BookService from '../services/book.service';

export const getAllBooks = async (req, res, next) => {
    try {
          console.log("req.body",req.body)
          const data = await BookService.getAllBooks(req.body);
          res.status(HttpStatus.OK).json({
          code: HttpStatus.OK,
          data: data,
          message: 'All books fetched successfully'
      });
      } catch (error) {
       next(error);
      }
      };
  
      export const getBook = async (req, res, next) => {
    try {
      console.log("req.body",req.body)
      const data = await BookService.getBook(req.params._id);
      res.status(HttpStatus.OK).json({
        code: HttpStatus.OK,
        data: data,
        message: 'Book fetched successfully'
      });
    } catch (error) {
      next(error);
    }
  };