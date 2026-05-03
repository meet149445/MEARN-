import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { MONGODB, PORT } from './config.mjs';
import router from './src/router/routes.mjs';

const app = express();

app.use(express.json());
app.use (cors());

mongoose.connect(MONGODB)
.then(() => console.log("Server is Connected"))
.catch(err => console.log(err));

app.use('/', router);
app.listen(PORT, "0.0.0.0", () =>{
    console.log(`Server is running on port ${PORT}`);
})