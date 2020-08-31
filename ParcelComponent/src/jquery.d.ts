//全局变量
// declare var $: (param: () => void) => void;
//全局函数
interface JqueryInstance {
  html: (html: string) => JqueryInstance;
}
//函数重载
declare function $(readyFunc: () => void): void;
declare function $(selector: string): JqueryInstance;

declare namespace $ {
  namespace fn {
    class init {}
  }
}

///使用interface的语法，实现函数重载

// interface Jquery {
//   (readyFunc: () => void): void;
//   (selector: string): JqueryInstance;
// }
// declare var $: Jquery;
