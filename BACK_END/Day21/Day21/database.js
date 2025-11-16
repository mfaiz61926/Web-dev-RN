const mongoose = require('mongoose');

async function main() {
   
  await mongoose.connect(db_api);
  
}


module.exports = main;