let name;

name = 'Test';
name = "Test";
name = `${name}`;

console.log(name);
console.log(typeof name);

// String methods
const learning = "JS is good";

let output;

output = learning.length;
//concat
output = learning.concat(" ", "Test");
// case
output = learning.toUpperCase();
output = learning.toLowerCase();
// Indexof
output = learning.indexOf('good');
// substring(start<inclusive>, end<exclusive>)
output = learning.substring(0, 1);
//substring from end
output = learning.substring(learning.length - 6);
//slice, same as substring
output = learning.slice(0, 1)
// when slicing from the end, you can just give it a negative value
output = learning.slice(-6);
// split
output = learning.split(" ");
// replace
output = learning.replace("JS", "Javascript");
// includes, similiar as indexOf, instead it returns only true/false
output = learning.includes("JS");
// repeat
output = learning.repeat(5);
console.log(output);
