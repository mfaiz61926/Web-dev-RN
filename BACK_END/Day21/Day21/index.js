const express = require("express");
const app = express();
const main = require("./database");
const User = require("./Models/users")
const validUser = require("./utils/validateuser")
const bcrypt = require("bcrypt");
const cookieParser = require('cookie-parser')
const jwt = require('jsonwebtoken');
const userAuth = require("./middleware/userAuth");


app.use(express.json());
app.use(cookieParser())


app.post("/register", async (req,res)=>{

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



app.post("/login", async(req,res)=>{

    try{

        // validate karna
        
        const people = await User.findOne({emailId:req.body.emailId});
        
        // if(!(req.body.emailId===people.emailId))
        //     throw new Error("Invalid credentials");

        const IsAllowed = await bcrypt.compare(req.body.password, people.password);

        if(!IsAllowed)
            throw new Error("Invalid credentials");
        

        // jwt token 

        const token = jwt.sign({_id:people._id, emailId:people.emailId},"Rohit@13412$");

        res.cookie("token",token);
        res.send("Login Successfully");

    }
    catch(err){
        res.send("Error: "+err.message);
    }
})
    

app.get("/user",userAuth, async(req,res)=>{
    
    try{
        
        res.send(req.result);
    }
    catch(err){
       
        res.send("Error "+err.message);
    }


})

app.delete("/user/:id",userAuth, async (req,res)=>{

    try{

        //  authenticate the user: Token
        await User.findByIdAndDelete(req.params.id);
        res.send("Deleted Succesfully");
    }
    catch(err){
        
        res.send("Error"+err.message);
    }


})


app.patch("/user",userAuth, async(req,res)=>{

    try{
        const {_id, ...update} = req.body;

        await User.findByIdAndUpdate(_id,update,{"runValidators":true});
        res.send("Update Succesfully");
    }
    catch(err){
        res.send("Error "+err.message);
    }
})



main()
.then(async ()=>{
    console.log("Connected to DB")
    app.listen(3000, ()=>{
        console.log("Listening at port 3000");
    })
})
.catch((err)=>console.log(err));



