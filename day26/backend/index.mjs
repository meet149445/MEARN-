import express from 'express'
import mongoose from 'mongoose'
import { MONGODB, PORT } from './config.mjs';
import router from './src/routes/routes.mjs';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());
mongoose.connect(MONGODB)
.then(()=> console.log("✅ Connected"))
.catch(err => console.log("❌ Error:", err));

app.use('/', router);

app.listen(PORT || 3000, "0.0.0.0", () => {
  console.log(`🚀 Server is running on port ${PORT || 3000}`);
});

console.log(MONGODB);