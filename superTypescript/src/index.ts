function getNameDecorator(
  target: any,
  key: string,
  descriptor: PropertyDescriptor
) {}
class Test {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  @getNameDecorator
  getName() {
    return this.name;
  }
}

const test = new Test('dell');
console.log(test.name);
