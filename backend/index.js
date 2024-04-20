const express=require('express');
const mongoose=require('mongoose'); 
const jwt=require('jsonwebtoken');
const dotenv=require('dotenv');
const cors=require('cors');
const User=require('./models/user') 


dotenv.config()
mongoose.connect(process.env.MONGO_URL);
 const jwtsecret=process.env.JWT_SECRET ;

const app=express(); 

app.use(cors(
{
    credentials:true,
    origin:process.env.CLIENT_URL

}));

app.get('/test',(req,res)=>{
    res.json('test ok');
   
}); 
app.post('/register', async (req,res)=>{
    const {username,password}=req.body ;
    const createdUser= await User.create({username,password})

    jwt.sign({userId:createdUser,_id},jwtsecret),{},(err,token)=>{
      if (err) throw  error; 

      res.cookie('token',token).satatus(201).json('ok');
  
    };

    res.json()
  
});

app.listen(4000,console.log('port runs on 4000'));