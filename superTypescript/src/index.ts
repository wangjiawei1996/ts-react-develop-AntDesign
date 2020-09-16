function getNameDecorator(
  target: any,
  key: string,
  descriptor: PropertyDescriptor
) {}
class Test {
  private _name: string;
  constructor(name: string) {
    this._name = name;
  }
  get name() {
    return this._name;
  }
  set name(name: string) {
    this._name = name;
  }
}

// const test = new Test('dell');
// console.log(test.name);
