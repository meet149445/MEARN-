import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config();

const app = express();
app.use(express.json());

mongoose.connect(process.env.mongodb)
.then(() => console.log("✅ Connected"))
.catch(err => console.log("❌ Error:", err));

app.get('/', (req, res) => {
    res.send("Hello World");
});

app.listen(process.env.port, () => {
    console.log(`Server is running on port ${process.env.port}`);
});