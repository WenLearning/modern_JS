// numbers to strings
let number = 90210;
let output;

output = number;

//String constructor
output = String(number);

//Boolean to String
output = String(true);

//date to string
output = String(new Date());

//array into string
output = [1,2,3];
output = String(output);

//toString doesn't work on numbers
// this will error!
// 12.toString()
output = true.toString();
output = [1,2,3].toString();
output = {name: "test"}.toString();

console.log(output);
console.log(typeof output);
