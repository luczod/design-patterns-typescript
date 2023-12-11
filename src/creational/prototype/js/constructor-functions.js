function Person(firstName, lastName, year) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.year = year;
}

const personProtoType = {
  firstName: 'alexander',
  lastName: 'bell',
  year: 1876,
  fullname() {
    return `${this.firstName} ${this.lastName}`;
  },
};

Person.prototype = Object.create(personProtoType);
Person.prototype.constructor = Person;

function SubPerson(firstName, lastName, year) {
  Person.call(this, firstName, lastName, year);
  this.fromSubClass = 'ok';
}

SubPerson.prototype = Object.create(Person.prototype);
SubPerson.prototype.constructor = SubPerson;

const person1 = new Person('Thomas', 'watson', 1876);
console.log(person1);
console.log(person1.fullname());

const person2 = new SubPerson('Thomas', 'Edison', 1876);
console.log(person2);
console.log(person2.fullname());
