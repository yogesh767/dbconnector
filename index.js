const express=require("express");
const dataservice = require("./services/dataservice");

const app=express();
const port=3001;

app.use(express.json());
app.post("/",async(req,res)=>{
    // console.log("req recieved",req.body)
    let data =await dataservice.findData({...req.body})
    res.status(200)
    res.send({sucess :true,data})
})

app.listen(port,()=>{
    console.log('server is up and running on ',port)
})