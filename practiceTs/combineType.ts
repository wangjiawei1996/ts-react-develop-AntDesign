interface Dog {
  fly: Boolean;
  bark: () => {};
}
interface Bird {
  fly: boolean;
  sign: () => {};
}

function trainAnimal(animal: Dog | Bird) {
  if (animal.fly) {
    (animal as Bird).sign();
  } else {
    (animal as Dog).bark();
  }
}

function trainAnimalSecond(animal: Dog | Bird) {
  if ('sign' in animal) {
    animal.sign();
  } else {
    animal.bark();
  }
}

function add(first: number | string, second: number | string) {
  if (typeof first === 'string' || typeof second === 'string') {
    return `${first}${second}`;
  }
  return first + second;
}
class NumberObj {
  count: number;
}
function addSecond(first: object | NumberObj, second: object | NumberObj) {
  if (first instanceof NumberObj && second instanceof NumberObj) {
    return first.count + second.count;
  }
  return 0;
}
