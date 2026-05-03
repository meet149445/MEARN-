import dotenv from 'dotenv'
dotenv.config();

const MONGODB = process.env.MONGODB;
const PORT = process.env.PORT;

export { MONGODB, PORT };