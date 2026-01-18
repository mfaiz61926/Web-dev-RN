const express = require("express");

const authRouter = express.Router();
const bcrypt = require("bcrypt");
const User = require("../Models/users");
const redisClient = require("../config/redis");
const jwt = require('jsonwebtoken');
const userAuth = require("../middleware/userAuth");

// /auth/register

authRouter.post("/register", async (req,res)=>{

    try{

        // Validate kya uske andar firstName
        validUser(req.body);
        
        //  converting password into hashing
       req.body.password = await bcrypt.hash(req.body.password,10);

        await User.create(req.body);
        res.send("User Registered Successfully");
    }
    catch(err){
        res.send("Error "+ err.message);
    }
})



authRouter.post("/login", async(req,res)=>{

    try{

        // validate karna
        
        const people = await User.findOne({emailId:req.body.emailId});
        
        // if(!(req.body.emailId===people.emailId))
        //     throw new Error("Invalid credentials");

        const IsAllowed = people.verifyPassword(req.body.password);

        if(!IsAllowed)
            throw new Error("Invalid credentials");
        

        // jwt token 

        const token = people.getJWT();

        res.cookie("token",token);
        res.send("Login Successfully");
    }
    catch(err){
        res.send("Error: "+err.message);
    }
})

// iat: 1744647627,
// exp: 1744649427

// /auth/logout

// Reddis ke database mein humko Blocked Token
// token: exp: 

authRouter.post("/logout",userAuth, async(req,res)=>{

    try{
       
       const {token} = req.cookies;
    //    console.log(token);
       
       const payload = jwt.decode(token);
    //    console.log(payload);

       await redisClient.set(`token:${token}`, "Blocked");
    //    await redisClient.expire(`token:${token}`,1800);
      await redisClient.expireAt(`token:${token}`,payload.exp);

       res.cookie("token",null,{expires: new Date(Date.now())});
       res.send("Logged Out Succesfully");
    }
    catch(err){
        res.send("Error: "+err.message);
    }
})

module.exports = authRouter