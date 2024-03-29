import React, { useState, useEffect, useRef, useContext } from "react";
import { ThemeContext } from "../App";
import useMouseTracker from "../hooks/useMouseTracker";
const LikeButtn: React.FC = () => {
  const [like, setLike] = useState(0);
  const [on, setOn] = useState(true);
  const positions = useMouseTracker();
  const likeRef = useRef(0);
  const didMountRef = useRef(false);
  const domRef = useRef<HTMLInputElement>(null);
  const theme = useContext(ThemeContext);
  const style = {
    background: theme.background,
    color: theme.color,
  };
  useEffect(() => {
    document.title = `点击了${like}次`;
  }, [like, on]);
  useEffect(() => {
    if (didMountRef.current) {
      console.log("this is updated");
    } else {
      didMountRef.current = true;
    }
  });
  useEffect(() => {
    if (domRef.current && domRef) {
      domRef.current.focus();
    }
  });
  function handleAlertClick() {
    setTimeout(() => {
      alert("you click on" + likeRef.current);
    }, 3000);
  }
  return (
    <div>
      <input type="text" ref={domRef} />
      <button
        style={theme}
        onClick={() => {
          setLike(like + 1);
          likeRef.current++;
        }}
      >
        {like}👍
      </button>
      <button onClick={handleAlertClick}></button>
    </div>
  );
};
export default LikeButtn;
