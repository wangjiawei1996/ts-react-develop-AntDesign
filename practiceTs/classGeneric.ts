// interface Item {
//   name: string;
// }

// class DataManger<T extends Item> {
//   constructor(private data: T[]) {}
//   getItem(index: number): string {
//     return this.data[index].name;
//   }
// }

// const data = new DataManger([
//   {
//     name: 'Jiawei',
//   },
// ]);
// const data = new DataManger<number>([1]);
// data.getItem(0);

class DataManger<T> {
  constructor(private data: T[]) {}
  getItem(index: number): T {
    return this.data[index];
  }
}

function hell0<T>(patam: T) {
  return patam;
}
const func: <T>(patam: T) => T = hell0;
