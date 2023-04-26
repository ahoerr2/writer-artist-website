import React, { useState, useEffect } from "react";

function Typewriter({
  timeout = 75,
  cursorTimeout = 750,
  children,
  reverseAfter = 0,
}) {
  const [currentText, setCurrentText] = useState("");
  const [index, setIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [isReversing, setIsReversing] = useState(false);

  useEffect(() => {
    const text = children;
    const timer = setTimeout(() => {
      if (isReversing) {
        setCurrentText(currentText.slice(0, -1));
        setIndex(index - 1);
      } else {
        setCurrentText(currentText + text[index]);
        setIndex(index + 1);
      }
    }, timeout);

    if (index === text.length) {
      if (reverseAfter > 0) {
        setIsReversing(true);
        setTimeout(() => setIsReversing(false), reverseAfter);
      } else {
        clearTimeout(timer);
      }
    }

    return () => clearTimeout(timer);
  }, [currentText, index, children, timeout, isReversing, reverseAfter]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prevShowCursor) => !prevShowCursor);
    }, cursorTimeout);

    return () => clearInterval(cursorInterval);
  }, []);

  const cursorStyle = {
    visibility: showCursor ? "visible" : "hidden",
  };

  return (
    <>
      {currentText}
      <span style={cursorStyle}>|</span>
    </>
  );
}

export default Typewriter;
