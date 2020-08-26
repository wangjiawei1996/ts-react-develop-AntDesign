namespace Component {
  export namespace SubComponents {
    export class Test {}
  }
  export interface User {
    name: string;
  }

  export class Headeer {
    constructor() {
      const elem = document.createElement('div');
      elem.innerText = 'header';
      document.body.appendChild(elem);
    }
  }
  export class Footer {
    constructor() {
      const elem = document.createElement('div');
      elem.innerText = 'footer';
      document.body.appendChild(elem);
    }
  }
}
