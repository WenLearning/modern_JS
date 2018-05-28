const todo = [1,2,3];

// forEach only for showing. Won't change anything
todo.forEach((assignment, index) => {
  console.log(`${assignment} ${index}`);
  assignment = 100;
});

console.log(todo);

// map is creating a new array
const new_todo = todo.map((item) => {
  return item + 1;
})
console.log(new_todo);

// iterators: Loop through the elements
let car = {
  model: "test",
  engine: 1,
  year: 1000,
  make: "testing"
};

for(let key in car){
  console.log(`${key}: ${car[key]}`);
}
