const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send("Hello i am from backend")
})
app.get('/intro',(req,res)=>{
    res.send("This is intro page")
})

app.listen(8000, ()=> {
    console.log('Server is running on port 8000');
})