interface Prototype {
  clone(): Prototype;
}

export class Person implements Prototype {
  public addresses: Array<Address> = [];

  constructor(
    public name: string,
    public age: number,
  ) {}

  clone(): this {
    const newObj = Object.create(this);
    return newObj;
  }

  addAdress(address: Address) {
    this.addresses.push(address);
  }
}

export class Address {
  constructor(
    public street: string,
    public num: number,
  ) {}
}

const addres1 = new Address('street', 15);
const person1 = new Person('john', 21);
person1.addAdress(addres1);
// shollaw copy
const person2 = person1.clone();

person1.addresses[0].street = 'city';

person2.name = 'jane';
console.log(person2);
console.log(person2.addresses);
