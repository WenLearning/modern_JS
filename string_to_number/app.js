let number;


// Number constructor: Can construct number from
// String
// Number
// Boolean
// Will return NaN(Not a Number) given:
// String that is not a number
// Array
number = Number(1);
number = Number('11');
number = Number("123.1");
number = Number(null);
number = Number([1,2,3]);
number = Number(true);

// parseInt/parseFloat only work on string numbers
// toFixed only works on number also

// All data submits to a form will be a string

console.log(number);
console.log(typeof number);
