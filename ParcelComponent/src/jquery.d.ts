//全局变量
// declare var $: (param: () => void) => void;
//全局函数
declare module 'jquery' {
  interface JqueryInstance {
    html: (html: string) => JqueryInstance;
  }
  function $(readyFunc: () => void): void;
  function $(selector: string): JqueryInstance;
  namespace $ {
    namespace fn {
      class init {}
    }
  }
  export = $;
}

///使用interface的语法，实现函数重载

// interface Jquery {
//   (readyFunc: () => void): void;
//   (selector: string): JqueryInstance;
// }
// declare var $: Jquery;
