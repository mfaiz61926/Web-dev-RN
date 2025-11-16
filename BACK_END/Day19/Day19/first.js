const bcrypt = require("bcrypt")


const password = "Rohit@123";

async function Hashing(){
// hashcode + salt

// const salt = await bcrypt.genSalt(10);
const hashpass = await bcrypt.hash(password,10);


const ans = await bcrypt.compare("Rohit",hashpass);

console.log(ans);

// console.log(salt);
// console.log(hashpass);

// console.log(hashpass);
}

// $2b$10$N5ehmB3b5kW1D3Mdhpl5JO
// $2b$10$N5ehmB3b5kW1D3Mdhpl5JOr9WCkz9sqnsdjUtut8BgG5rFTzOyqcO

Hashing();

// Algorithm --> hashCode

// $2b$10$FGFrKRj/qnlZtzdbX8yiW.a1ss63.MbDLXk22ByuWfnrqEYwPimOG
// $2b$10$gj64VbN4D5qqqGwRzihk8Oa3g9wh0kBORHQi/69PBQHts53R.n5FO