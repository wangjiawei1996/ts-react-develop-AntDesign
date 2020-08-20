function join<T, P>(first: T, second: P) {
  return `${first}${second}`;
}
function anotherJoin<T>(first: T, second: T): T {
  return first;
}
join<string, number>('1', 2);

function map<T>(params: T[]) {
  return params;
}
map<number>([1]);
