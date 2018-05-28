//Creating an array
const numbers = [10,20,30,40,50];

console.log(numbers[2]);
// array of month
const months = new Array('Jan', 'Feb', 'Mar');
console.log(months);

// Mixed values
const mixedArray = ['hello', 10]
console.log(mixedArray);

// Check length
console.log(months.length);
// check if Array
console.log(Array.isArray(months));

// Useful methods
console.log(months[1]);

//find in Array
console.log(months.indexOf('Jan'));

// Add
// Add more items
console.log(months.push('July'));
// Add more items in the beginning
months.unshift("0");
// Add in middle
months.splice(3, null, 'a new month')

// Remove
// from end
months.pop();
// from beginning
months.shift()
// from middle
months.splice(2, 1)

// Sort
months.reverse()

//concat
const a1 = [1,2,3];
const a2 = [4,5,6];
console.log(a1.concat(a2));

//Sort
months.sort()
const nums = [1,100,2,20,30,3];
// The default sort will be alphabetical order
// Even with numbers.
console.log(nums.sort());
console.log(nums.sort((n1, n2) => {
  return n1 - n2;
}));

console.log(months);
