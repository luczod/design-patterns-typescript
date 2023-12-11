const personProtoType = {
  firstName: 'alexander',
  lastName: 'bell',
  year: 1876,
  fullname() {
    return `${this.firstName} ${this.lastName}`;
  },
};

const anotherPerson = Object.create(personProtoType);
anotherPerson.firstName = 'gardiner';
console.log(anotherPerson);
// first search in object after in prototype
console.log(anotherPerson.firstName);
console.log(anotherPerson.fullname());
