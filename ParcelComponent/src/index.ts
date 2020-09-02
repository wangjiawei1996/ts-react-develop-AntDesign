interface Person {
  name: string;
  age: number;
  gener: string;
}
class Teacher {
  constructor(private info: Person) {}
  getInfo<T extends keyof Person>(key: T): Person[T] {
    return this.info[key];
  }
}
const teacher = new Teacher({
  name: 'dell',
  age: 30,
  gener: 'male',
});
const test = teacher.getInfo('name') as string;
