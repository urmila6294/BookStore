import express from 'express';
import * as customerContoller from '../controllers/customerDetails.controller';
import { userAuth } from '../middlewares/auth.middleware';
import { customerDetailsValidator } from '../validators/customerDetails.validator';



const router = express.Router();

router.post('', customerDetailsValidator, userAuth, customerContoller.customerDetails);

export default router;