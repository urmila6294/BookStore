import { number } from '@hapi/joi';
import { Schema, model } from 'mongoose';

const bookSchema = new Schema(
  {
    description: {
      type: String,
      required: true,
    },
    bookImage: {
      type: String,
      required: true,
    },
    bookName: {
      type: String,
      required:true,
    },
    author:{
        type: String,
      required:true,
    },
    quantity:{
        type : Number,
        required: true,
    },
    price:{
        type : Number,
        required: true,
    },

      UserID: {type:String},
    
    
  },
  {
    timestamps: true
  }
);

export default model('Book', bookSchema);