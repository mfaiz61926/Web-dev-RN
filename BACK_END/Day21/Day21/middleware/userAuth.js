const jwt = require('jsonwebtoken');
const User = require("../Models/users");

const userAuth = async (req,res,next)=>{

    try{
        const {token} = req.cookies;
        if(!token){
            throw new Error("Token Doesn't exist");
        }

        const payload =  jwt.verify(token,"Rohit@13412$");
        // console.log(payload);

        const {_id} = payload;

        if(!_id){
            throw new Error("Id is missing");
        }

        const result = await User.findById(_id);

        if(!result){
            throw new Error("User Doesn't exist");
        }

        req.result = result;


        next();
    }
    catch(err){
        res.send("Error: "+ err.message)
    }

}

module.exports = userAuth;