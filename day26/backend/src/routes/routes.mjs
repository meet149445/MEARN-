import express from 'express'
import { createUser } from '../controllers/userController.mjs';

const router = express.Router();
router.get('/', (req,res) =>{
    res.send({status:"ok", message: "Welcome to the API"});
})

router.post('/registration', createUser);
export default router;