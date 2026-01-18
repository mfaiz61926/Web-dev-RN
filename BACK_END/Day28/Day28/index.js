const express = require('express');
const app = express();
const main = require("./aiChatting")


app.use(express.json());

const chattingHistory = {};

// const chattingHistory = {
//     1: [{role:'user', parts: [{text:"Hi, How are you"}]}, {role:'model', parts:[{text:"I am Good what about you "}]}],
//     2: [],
//     3:[],
//     4:[],
// }
// We will install our user chat history here
// key: value pair
// key = id
// value = array




app.post('/chat', async(req,res)=>{
     
    const {id, msg} = req.body;
     
    if(!chattingHistory[id]){
        chattingHistory[id] = []
    }

     
    // extract user history
    const History = chattingHistory[id];
//  [] array of history

    // History+current ; array

    // [{},{},{},{}, {}]
    const promptmessage = [...History , {
        role:'user',
        parts: [{text:msg}]
    }]

    const answer = await main(promptmessage);
    

    // User question ko bhi insert karna hai
    // model ke resonse ko bhi insert karna
    History.push({role:'user', parts:[{text:msg}]})
    History.push({role:'model', parts:[{text:answer}]});
    res.send(answer);

})

// [{text:answer},{img:"hfjhasj"},{video:"iufhsahfsaf"}]



app.listen(3000, ()=>{
    console.log("Listening at port 3000");
})
