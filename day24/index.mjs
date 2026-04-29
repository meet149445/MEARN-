// import express from 'express';
// import router from './src/routes/routes.mjs';
// const app = express()

// app.get('/',(req,res)=>{
//     res.send("Heyy this is MeetPrajapati   ")
// })

// app.listen(8000,()=>{
//     console.log("Server is running on port 8000")
// })

import express from 'express';
import router from './src/routes/routes.mjs';

const app = express();

app.use(express.json()); // important
app.use('/', router);

app.get('/',(req,res)=>{
    res.send("Heyy this is Meet Prajapati");
});

app.listen(8000,()=>{
    console.log("Server is running on port 8000");
});