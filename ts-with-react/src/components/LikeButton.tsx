import React, { useState, useEffect } from "react";
import useMouseTracker from "../hooks/useMouseTracker";
const LikeButtn: React.FC = () => {
  const [like, setLike] = useState(0);
  const [on, setOn] = useState(true);
  const positions = useMouseTracker();
  useEffect(() => {
    document.title = `点击了${like}次`;
  }, [like, on]);
  function handleAlertClick() {
    setTimeout(() => {
      alert("you click on" + like);
    }, 3000);
  }
  return (
    <div>
      <button
        onClick={() => {
          setLike(like + 1);
        }}
      >
        {like}👍
      </button>
      <button onClick={handleAlertClick}></button>
    </div>
  );
};
export default LikeButtn;
