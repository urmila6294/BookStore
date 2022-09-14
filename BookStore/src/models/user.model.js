import { Schema, model } from 'mongoose';

const userSchema = new Schema(
  {
    FullName: {
      type: String
    },
    EmailId:{
      type: String
    },
    Password:{
      type : String
    },
    PhoneNo:{
      type: String
    }
  },
  {
    timestamps: true
  }
);

export default model('User', userSchema);
