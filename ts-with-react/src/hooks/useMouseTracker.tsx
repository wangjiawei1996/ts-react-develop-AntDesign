import React, { useState, useEffect } from "react";

const useMouseTracker = () => {
  const [position, setposition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const updateMouse = (e: MouseEvent) => {
      setposition({ x: e.clientX, y: e.clientY });
    };
    document.addEventListener("mousemove", updateMouse);
    return () => {
      document.removeEventListener("mousemove", updateMouse);
    };
  });
  return position;
};
export default useMouseTracker;
