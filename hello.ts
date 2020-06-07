const hello = (name: string) => {
  return `hello &{name}`;
};
hello("Jiawei");

const isDone: boolean = false;
const age: number = 23;
const binaryNumber: number = 0b111;
const firstName: string = "Jiawei";
let message: string = `hello, ${firstName}, age is ${age}`;

let notSure: any = 4;

notSure = "123";

let numberorString: number | string = 123;
numberorString = "23";
