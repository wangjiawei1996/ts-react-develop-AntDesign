import React, { useState, useEffect } from "react";

const LikeButtn: React.FC = () => {
  const [like, setLike] = useState(0);
  const [on, setOn] = useState(true);
  useEffect(() => {
    document.title = `点击了${like}次`;
  }, [like, on]);
  return (
    <div>
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
