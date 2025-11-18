const express = require("express");
const app = express();
const main = require("./database");
const User = require("./Models/users")
const validUser = require("./utils/validateuser")
const bcrypt = require("bcrypt");
const cookieParser = require('cookie-parser')
const jwt = require('jsonwebtoken');
const userAuth = require("./middleware/userAuth");
require('dotenv').config()
const authRouter = require("./routes/auth")
const userRouter = require("./routes/user")
const commentRouter = require("./routes/comment")




app.use(express.json());
app.use(cookieParser())


app.use("/auth",authRouter);
app.use("/user",userRouter);
app.use("/comment", commentRouter);



main()
.then(async ()=>{
    console.log("Connected to DB")
    app.listen(process.env.PORT, ()=>{
        console.log("Listening at port 3000");
    })
})
.catch((err)=>console.log(err));



