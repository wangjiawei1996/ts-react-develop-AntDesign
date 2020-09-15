function testDecorator(constructor: any) {
  constructor.prototype.getName = () => {
    console.log('dell');
  };
}

@testDecorator
class Test {}
const test = new Test();
(test as any).getName();
