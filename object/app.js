//objects

const person = {
  firstName: 'Juan',
  lastName: "test",
  job: "Dev",
  email: "email@email.com",
  age: 31,
  fav: ['Trance', 'Rock'],
  living: {
    city: "test",
    coun: "test"
  },
  getAge: () => {return 31;},
  bornYear: function() {
    return new Date().getFullYear() - this.age;
  },
  getJob: function() {
    return this.job;
  }
}

// common methods
console.log(person.firstName);
console.log(person['email']);

console.log(person.getAge());
console.log(person.bornYear());
console.log(person.getJob());
