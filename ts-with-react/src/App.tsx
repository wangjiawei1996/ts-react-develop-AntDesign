import React, { useState } from "react";
import Hello from "./components/hello";
import logo from "./logo.svg";
import LikeButton from "./components/LikeButton";
import MouseTracker from "./components/MouseTracker";
import useMouseTracker from "./hooks/useMouseTracker";
import "./App.css";
import useURLLoader from "./hooks/useURLLoader";

interface IShowResult {
  message: string;
  status: string;
}
const App: React.FC = () => {
  const [show, setshow] = useState(true);
  const [
    data,
    loading,
  ] = useURLLoader("https://dog.ceo/api/breeds/image/random", [show]);
  const dogResult = data as IShowResult;
  const positions = useMouseTracker();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <button
            onClick={() => {
              setshow(!show);
            }}
          >
            Tracker
          </button>
        </p>
        {loading ? (
          <p>狗狗读取中</p>
        ) : (
          <img src={dogResult && dogResult.message} />
        )}
        <p>
          X:{positions.x}, Y: {positions.y}
        </p>
        {show && <MouseTracker />}

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
};

export default App;
