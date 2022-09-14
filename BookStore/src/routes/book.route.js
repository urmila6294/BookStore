import express from 'express';
import * as bookController from '../controllers/book.controller';
import { userAuth } from '../middlewares/auth.middleware';

const router = express.Router();


//router to get all the notes
router.get('', userAuth,bookController.getAllBooks);

//router to get a single note
router.get('/:_id', userAuth, bookController.getBook);

export default router;