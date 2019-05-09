// CODE here for your Lambda Classes
class Person {
  constructor(attributes) {
    this._name = attributes.name;
    this._age = attributes.age;
    this._gender = attributes.gender;
    this._location = attributes.location;
  }

  speak() {
    return `Hello! My name is ${this._name}, I am from ${this._location}`;
  }
}

const jane = new Person({
  name: 'Jane',
  location: 'Phillipines',
  age: 25,
  gender: 'Female'
});

const johnny = new Person({
  name: 'Johnny',
  location: 'Jamaica',
  age: 18,
  gender: 'male'
});

console.log(jane.speak());
console.log(johnny.speak());

