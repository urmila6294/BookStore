import express from 'express';
import * as bookController from '../controllers/book.controller';
import { userAuth } from '../middlewares/auth.middleware';
import { redisAuth, redisAuthId } from '../middlewares/redis.middleware';

const router = express.Router();


//router to get all the notes
router.get('', userAuth,redisAuth,bookController.getAllBooks);

//router to get a single note
router.get('/:_id', userAuth,redisAuthId ,bookController.getBook);

export default router;