import React, { useState, useRef, useEffect } from "react";

const Item = ({ question, children }) => {
  const [active, setActive] = useState(false);
  const answerRef = useRef(null);
  const questionRef = useRef(null);

  useEffect(() => {
    answerRef.current.style.maxHeight = active
      ? `${answerRef.current.scrollHeight}px`
      : "0px";
    answerRef.current.style.padding = active ? "0 0 25px" : "0";
    answerRef.current.style.marginBottom = active ? "25px" : "0";
  }, [active]);

  useEffect(() => {
    questionRef.current.style.backgroundColor = active ? "#f0f0f0" : "white";
  }, [active]);

  const toogleActive = () => {
    setActive(!active);
  };

  return (
    <div className="item">
      <div className="question" ref={questionRef} onClick={toogleActive}>
        <p>{question}</p>
        <div className={active ? "toggle active" : "toggle"}>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className="answer" ref={answerRef}>
        {children}
      </div>
    </div>
  );
};

export default Item;
