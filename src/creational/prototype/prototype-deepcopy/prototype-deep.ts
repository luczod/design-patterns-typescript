interface Prototype {
  clone(): Prototype;
}

export class Person implements Prototype {
  public addresses: Array<Address> = [];

  constructor(
    public name: string,
    public age: number,
  ) {}

  clone(): Person {
    const newObj = new Person(this.name, this.age);
    newObj.addresses = this.addresses.map((item) => item.clone());
    return newObj;
  }

  addAdress(address: Address) {
    this.addresses.push(address);
  }
}

export class Address implements Prototype {
  constructor(
    public street: string,
    public num: number,
  ) {}

  clone(): Address {
    return new Address(this.street, this.num);
  }
}

const addres1 = new Address('street', 15);
const person1 = new Person('john', 21);
person1.addAdress(addres1);

const person2 = person1.clone();

person1.addresses[0].street = 'city';

person2.name = 'jane';
console.log(person2);
console.log(person2.addresses);

console.warn();
console.log(person1);
console.log(person1.addresses);
