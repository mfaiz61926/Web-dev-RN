const express = require("express");

// 
const app = express();

// "/detail"
// "/contact/person"
// "/detail/person"
// "/about"
// "/detail/home/10"

// ? char become Optional
// + char can be repeated multiple times
// * any number of character can arrive
//  rohit_negi9

app.use("/about/:id", (req,res)=>{
        console.log(req.params);
        res.send({"name":"Rohit", "age":20, "money":70, "Mon":20});
})








// app.use("/about", (req,res)=>{
//     res.send({"name":"Rohit", "age":20, "money":70, "Mon":20});
// })

// app.use("/contact", (req,res)=>{
//     res.send("I am your Contact Page");
// })

// app.use("/detail", (req,res)=>{
//     res.send("I am your Detail Page");
// })

// app.use("/", (req,res)=>{
//     res.send("I am Your Home Page");
// })




app.listen(4000, ()=>{
    console.log("Listening at port 4000");
})