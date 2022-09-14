import User from '../models/user.model';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import * as utilservice  from '../utils/user.util';

//create new user Registeration
export const userRegisteration = async (body) => {
  const isPresent = await User.findOne({EmailId:body.EmailId});
  if(isPresent){
    throw new Error("User Already Exist!!");
  }
  else{
    const saltRounds=10;
    const hashPassword=await bcrypt.hash(body.Password,saltRounds); 
    body.Password = hashPassword;
    const data = await User.create(body);
    return data;
  }};

  export const getAllUsers = async () => {
    const data = await User.find();
    return data;
  };
  

//user login
export const userLogin = async (body) => {
  const data = await User.findOne({EmailId:body.EmailId})
  const ispasswordcorrect = await bcrypt.compare(body.Password,data.Password)
  if(data){
    if(ispasswordcorrect){
      const token = jwt.sign({ EmailId: data.EmailId, _id: data._id }, process.env.NEW_SECRET_KEY);
    return token;
  }else{
    throw new error("Password not match!")
  } }
else{
  throw new error("Invalid EmailID!")
}};

//forget password
export const forgetPassword = async (body) => {
  const data = await User.findOne({ EmailId: body.EmailId });
  if (data) {
    const token = jwt.sign({ EmailId: data.EmailId, _id: data._id }, process.env.SECRET_KEY_PASSWORD);
    const result = await utilservice.sendMail(data.EmailId, token);
    console.log(result);
    return result;
  } else {
    throw new Error("User not exist");
  }
};

//reset password
export const resetPassword = async (body) => {
  const saltRounds = 10;
  const passwordHash = await bcrypt.hash(body.Password, saltRounds);
  body.Password = passwordHash;
  const data = await User.findOneAndUpdate({ EmailId: body.EmailId }, { Password: body.Password }, { new: true });
  console.log(data);
  if (data) {
    return data;
  } else {
    throw new Error("User not exist");
  }
};