// CODE here for your Lambda Classes
/**
 * @class Person
 */
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

/**
 * @class Instructor
 * @extends {Person}
 */
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

/**
 * @class Student
 * @extends {Person}
 */
class Student extends Person {
  constructor(attributes) {
    super(attributes);
    this._previousBackground = attributes.previousBackground;
    this._className = attributes.className;
    this._favSubjects = attributes.favSubjects;
  }

  listsSubjects() {
    this._favSubjects.forEach(subject => console.log(subject));
  }

  PRAssignment(subject) {
    return `${this._name} has submitted a PR for ${subject}`
  }

  sprintChallenge(subject) {
    return `${this._name} has begun sprint challenge on ${subject}`
  }
}

const precious = new Student({
  name: 'Precious',
  location: 'Nigeria',
  age: 20,
  gender: 'Female',
  previousBackground: 'Fine Art',
  className: 'WebEU5',
  favSubjects: ['Art', 'CSS', 'LESS', 'Web Design']
});

const manny = new Student({
  name: 'Manny',
  location: 'Ivory Coast',
  age: 21,
  gender: 'Male',
  previousBackground: 'Computer Science',
  className: 'WebUS1',
  favSubjects: ['French', 'Java']
});

console.log(precious.speak());
precious.listsSubjects();
console.log(precious.sprintChallenge('LESS'));
console.log(manny.speak());
manny.listsSubjects();
console.log(manny.sprintChallenge('Java'));

/**
 * @class ProjectManager
 * @extends {Person}
 */
class ProjectManager extends Instructor {
  constructor(attributes) {
    super(attributes);
    this._gradClassName = attributes.gradClassName;
    this._favInstructor = attributes.favInstructor;
  }

  standUp(slackChannel) {
    return `${this._name} announces to ${slackChannel}, @channel standy times!`;
  }

  debugsCode(student, subject) {
    return `${this._name} debugs ${student.name}'s code on ${subject}`;
  }
}

const emmanuel = new ProjectManager({
  name: 'Emmanuel',
  location: 'Nigeria',
  age: 23,
  gender: 'male',
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Good sleep is magic`,
  gradClassName: 'WebEU2',
  favInstructor: 'John'
});

const lydia = new ProjectManager({
  name: 'Lydia',
  location: 'England',
  age: 20,
  gender: 'Female',
  favLanguage: 'Python',
  specialty: 'Back-end',
  catchPhrase: `Constant Practice`,
  gradClassName: 'CS2',
  favInstructor: 'Melinda'
});

console.log(emmanuel.speak());
console.log(emmanuel.demo('Python'));
console.log(emmanuel.grade({name: 'Loveday'}, 'JavaScript'));
console.log(emmanuel.standUp('#WebEU2'))
console.log(emmanuel.debugsCode({name: 'Loveday'}, 'JavaScript'))

console.log(lydia.speak());
console.log(lydia.demo('Python'));
console.log(lydia.grade({name: 'Fres'}, 'Python'));
console.log(lydia.standUp('#CS2'));
console.log(lydia.debugsCode({name: 'Fres'}, 'Python'))

