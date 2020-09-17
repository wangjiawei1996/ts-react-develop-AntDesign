const userInfo: any = undefined;

function catchError(msg: string) {
  return function (target: any, key: string, descriptor: PropertyDescriptor) {
    const fn = descriptor.value;
    descriptor.value = function () {
      try {
        fn();
      } catch {
        console.log(msg);
      }
    };
  };
}
class Test {
  @catchError('userInfo.name不存在')
  getInfo() {
    return userInfo.name;
  }
  @catchError('userInfo.age不存在')
  getAge() {
    return userInfo.age;
  }
}
