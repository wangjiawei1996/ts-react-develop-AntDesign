// 函数声明的写法
// function add(x: number, y: number, z?: number): number {
//   if (typeof z === "number") {
//     return x + y + z;
//   } else {
//     return x + y;
//   }
// }
// let result = add(5, 3, 1);

const add = function (x: number, y: number, z?: number): number {
  if (typeof z === "number") {
    return x + y + z;
  } else {
    return x + y;
  }
};
let result: (x: number, y: number, z?: number) => number = add;
