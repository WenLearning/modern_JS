let variable = "test";

console.log(variable);
// typeof will output the type of the variable
console.log(typeof variable);

variable = 20;

console.log(variable);
// variables can changes types by reassign
console.log(typeof variable);

// In javascript number is number
// There's no distinguish between integer and float
variable = 1;
variable = 10.234;
console.log(typeof variable);

// null
variable = null;
// undefined, or when you don't initialize the vairable
variable = undefined;

//symbol
let symbol = Symbol("symbol")

//arrays
let languages = [
  'html',
  'js',
  'css'
]
console.log(languages)

//objects
let p2 = {
  name: "test",
  country: "testing"
}

console.log(typeof p2);

//Date
let today = new Date();
console.log(typeof today);
