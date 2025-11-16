const mongoose = require('mongoose');

async function main() {
   
  await mongoose.connect("connection string");
  
}


module.exports = main;