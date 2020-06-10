class Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  run() {
    return `${this.name} is running`;
  }
}
const animal = new Animal("Lili");

class Cat extends Animal {
  constructor(name) {
    super(name);
  }
  run() {
    return "meol," + super.run();
  }
}
const cat = new Cat("maomao");
