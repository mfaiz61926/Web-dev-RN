const mongoose = require('mongoose');

async function main() {
   
  await mongoose.connect("connection string /Instagram");
  
}


module.exports = main;