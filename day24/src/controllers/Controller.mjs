// const userDetails = (req,res) =>{
//     res.send({
//         name : "Meet Prajapati",
//         age : 22,
//         city : "Ahmedabad",
//         profession : "MERN Stack Developer"
//     })
// };

// const createUser = (req,res)=>{
//     let data = req.body;
//     req.send(data)

// }

// export {userDetails, createUser};


const userDetails = (req,res) =>{
    res.send({
        name : "Meet Prajapati",
        age : 22,
        city : "Ahmedabad",
        profession : "MERN Stack Developer"
    });
};

let obj = {
    "india":"i am indian",
    "usa":"I am american",
    "japan":"I am japanese"
}

const createUser = (req,res)=>{
    let data = req.body;
    res.send(data);
};

const getUser = (req,res)=>{
    let paramData = req.params;
    let queryData = req.query;
    console.log(queryData);
    console.log(obj[paramData.name]);
    res.send(obj[paramData.name]);
}

export {userDetails, createUser, getUser};