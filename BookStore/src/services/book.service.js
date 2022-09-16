import book from '../models/book.model';
import { client } from '../config/redis';

export const getAllBooks = async(body) => {
    const data = await book.find({userId:body.userId});
    await client.set('getAllData',JSON.stringify(data));
    return data;
  };
  
  export const getBook= async (_id) => {
    const data = await book.findById(_id);
    await client.set('getSingleData',JSON.stringify(data));
    return data;
  };