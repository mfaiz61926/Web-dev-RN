const express = require("express");

const userRouter = express.Router();
const userAuth = require("../middleware/userAuth");
const User = require("../Models/users")


userRouter.get("/",userAuth, async(req,res)=>{
    
    try{
        
        res.send(req.result);
    }
    catch(err){
       
        res.send("Error "+err.message);
    }


})

userRouter.delete("/:id",userAuth, async (req,res)=>{

    try{

        //  authenticate the user: Token
        await User.findByIdAndDelete(req.params.id);
        res.send("Deleted Succesfully");
    }
    catch(err){
        
        res.send("Error"+err.message);
    }


})


userRouter.patch("/",userAuth, async(req,res)=>{

    try{
        const {_id, ...update} = req.body;

        await User.findByIdAndUpdate(_id,update,{"runValidators":true});
        res.send("Update Succesfully");
    }
    catch(err){
        res.send("Error "+err.message);
    }
})


module.exports = userRouter