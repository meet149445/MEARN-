import express from 'express';
import {createUser, userDetails, getUser} from '../controllers/Controller.mjs';

const router = express.Router();

router.get('/user', userDetails);
router.post('/create', createUser);
router.get('/user/:name',getUser)

export default router;