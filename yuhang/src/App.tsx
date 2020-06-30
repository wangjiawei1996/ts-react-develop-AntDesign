import React from "react";
import Button, { ButtonSize, ButtonType } from "./components/Button/button";
import Alert, { AlertType } from "./components/Alert/alert";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button disabled>Hello</Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>
          World
        </Button>
        <Button btnType={ButtonType.Danger} size={ButtonSize.Small}>
          Yuhang
        </Button>
        <Button btnType={ButtonType.Link} href="http://www.baidu.com">
          link baidu
        </Button>
        <Button btnType={ButtonType.Link} href="http://www.baidu.com" disabled>
          link baidu
        </Button>
        <Alert message={123}></Alert>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
