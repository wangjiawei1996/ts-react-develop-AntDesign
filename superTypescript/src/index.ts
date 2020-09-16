// function nameDecorator(target: any, key: string): any {
//   const descriptor: PropertyDescriptor = {
//     writable: false,
//   };
//   return descriptor;
// }
function nameDecorator(target: any, key: string): any {
  // const descriptor: PropertyDescriptor = {
  //   writable: false,
  // };
  // return descriptor;
  target[key] = 'lee';
}
class Test {
  @nameDecorator
  name = 'dell';
}
const test = new Test();
console.log(test.name);
