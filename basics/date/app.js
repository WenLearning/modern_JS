const today = new Date();

const birthday = new Date('January 6 1987');

let output;

output = birthday;
output = new Date('1/5/1987')

console.log(output);
console.log(today);
console.log(birthday);

output = today.getMonth();
output = today.getDate();
output = today.getDay();
output = today.getFullYear();
output = today.getHours();

output = today.setFullYear(1900);
output = today.getFullYear();
console.log(output);
