// function nameDecorator(target: any, key: string): any {
//   const descriptor: PropertyDescriptor = {
//     writable: false,
//   };
//   return descriptor;
// }
function paramDecorator(target: any, method: string, paramIndex: number): any {
  console.log(target, method, paramIndex);
}
class Test {
  getInfo(@paramDecorator name: string, age: number) {
    console.log(name, age);
  }
}
const test = new Test();
test.getInfo('dell', 24);
