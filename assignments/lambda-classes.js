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

class Instructor extends Person {
  constructor(attributes) {
    super(attributes);
    this._speciality = attributes.speciality;
    this._favLanguage = attributes.favLanguage;
    this._catchPhrase = attributes.catchPhrase;
  }

  demo(subject) {
    return `Today we are learning about ${subject}`;
  }

  grade(student, subject) {
    return `${student.name} receives a perfect score on ${subject}`;
  }
}

const mark = new Instructor({
  name: 'Mark',
  location: 'Germany',
  age: 30,
  gender: 'male',
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Don't forget the homies`
});

const mary = new Instructor({
  name: 'Mary',
  location: 'France',
  age: 22,
  gender: 'Female',
  favLanguage: 'HTML',
  specialty: 'Front-end',
  catchPhrase: `Hardwork Pays`
});

console.log(mark.speak());
console.log(mark.demo('Python'));
console.log(mark.grade({name: 'Jane'}, 'Python'));
console.log(mary.speak());
console.log(mary.demo('Python'));
console.log(mary.grade({name: 'John'}, 'HTML'));
