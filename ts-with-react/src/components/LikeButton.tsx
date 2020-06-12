import React, { useState, useEffect } from "react";
import useMouseTracker from "../hooks/useMouseTracker";
const LikeButtn: React.FC = () => {
  const [like, setLike] = useState(0);
  const [on, setOn] = useState(true);
  const positions = useMouseTracker();
  useEffect(() => {
    document.title = `点击了${like}次`;
  }, [like, on]);
  return (
    <div>
      <h2>
        X:{positions.x}, Y: {positions.y}
      </h2>
      <button
        onClick={() => {
          setLike(like + 1);
        }}
      >
        {like}👍
      </button>
      <button
        onClick={() => {
          setOn(!on);
        }}
      >
        {on ? "ON" : "OFF"}
      </button>
    </div>
  );
};
export default LikeButtn;
