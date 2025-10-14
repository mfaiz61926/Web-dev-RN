const express = require("express");
const app = express();


const BookStore = [
    {id:1,name:"Harry Potter", author:"DevFlux"},
    {id:2, name:"Friends", author: "Vikas"},
    {id:3 , name:"Nexus", author:"Rohit"},
    {id:4 , name:"DSA", author:"Maharaj"},
    {id:5, name:"Prem Kahani", author:"Rohan"}
]

app.use(express.json());

// localhost:3000/book/3

app.get("/book", (req,res)=>{

    res.send(BookStore);
})

app.get("/book/:id", (req,res)=>{

    const id = parseInt(req.params.id);
    // console.log(typeof req.params.id)
    const Book =  BookStore.find(info=> info.id===id);
    res.send(Book); 
})

app.post("/book", (req,res)=>{
    console.log(req.body);
    BookStore.push(req.body);
    res.send("Data Saved Successfully");
})






app.listen(3000, ()=>{
    console.log("Listening at port 3000");
})


// // app.use("/user", (req,res)=>{

// //     res.send({name:"Rohit"})
// // })


// // parsing karni hoti hai
// app.use(express.json()); 
// //  middleware: json format data=> JS Object 

// app.get("/user", (req,res)=>{
//     // console.log(req);

//     res.send({name:"Rohit"})
// })

// app.post("/user", (req,res)=>{

//     // console.log("Data saved successfully");

//     console.log(typeof req.body.age);
//     res.send("Data Saved Successfully");
// })



// get, post, patch, put , delete


// app.listen(4000, ()=>{
//     console.log("Listening at port 4000");
// })



// route match honge: app.use

// app.get app.post app.patch app.put app.delete