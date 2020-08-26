///<reference path='./components.ts' />
namespace Home {
  export class Page {
    user: Component.User = {
      name: 'jiawei',
    };
    constructor() {
      new Component.Headeer();
      new Component.Footer();
    }
  }
}
