// functions

// function declaration
function hello(name){
  // default parameter, the old way
  if(typeof name == 'undefined'){
    name = "test"
  }
  console.log("herro" + name);
}
hello("test")
hello()

function add(n1, n2){
  return n1 + n2;
}
console.log(add(1, 2));

// function expression
const sum = function(n1, n2) {
  return n1 + n2;
}

console.log(sum(3,3));
console.log(sum());

// functions that are invoked immediately(IIFEs)
// Immediate-invoke function expression
(function() {
  console.log("test");
})();

// property method
const music = {
  play: function(id){
    console.log(`playing song with id: ${id}`);
  }
}

music.play(12)

// functions can be outside
music.test = function(){
  console.log('all good');
}
music.test();
