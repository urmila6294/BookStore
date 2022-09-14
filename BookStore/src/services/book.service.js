import book from '../models/book.model';

export const getAllBooks = async(body) => {
    const data = await book.find({UserID:body.UserID});
    return data;
  };
  
  export const getBook= async (_id) => {
    const data = await book.findById(_id);
    return data;
  };