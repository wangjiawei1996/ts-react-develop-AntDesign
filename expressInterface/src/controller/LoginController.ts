import 'reflect-metadata';
import { Request, Response } from 'express';
interface BodyRequest extends Request {
  body: {
    [key: string]: string | undefined;
  };
}
function get(path: string) {
  return function (target: any, key: string) {
    Reflect.defineMetadata('path', path, target, key);
  };
}
class LoginController {
  @get('/login')
  login() {}
  @get('/')
  home(req: BodyRequest, res: Response) {
    const isLogin = req.session ? req.session.login : false;
    if (isLogin) {
      res.send(`
      <html>
        <body>
          <a href='/get'>爬取内容</a>
          <a href='/showData'>展示内容</a>
          <a href='/logout'>退出</a>
        </body>
      </html>
    `);
    } else {
      res.send(`
    <html>
      <body>
        <form method="post" action="/login">
          <input type="password" name="password" />
          <button>登录</button>
        </form>
      </body>
    </html>
  `);
    }
  }
}
