namespace Home {
  class Headeer {
    constructor() {
      const elem = document.createElement('div');
      elem.innerText = 'header';
      document.body.appendChild(elem);
    }
  }
  class Footer {
    constructor() {
      const elem = document.createElement('div');
      elem.innerText = 'footer';
      document.body.appendChild(elem);
    }
  }
  export class Page {
    constructor() {
      new Headeer();
      new Footer();
    }
  }
}
