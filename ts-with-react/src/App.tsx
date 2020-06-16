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
interface IThemeProps {
  [key: string]: { color: string; background: string };
}
const themes: IThemeProps = {
  light: {
    color: "#000",
    background: "#eee",
  },
  dark: {
    color: "#fff",
    background: "#222",
  },
};
export const ThemeContext = React.createContext(themes.light);
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
      <ThemeContext.Provider value={themes.dark}>
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
          <LikeButton />
          <Hello />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </ThemeContext.Provider>
    </div>
  );
};

export default App;
