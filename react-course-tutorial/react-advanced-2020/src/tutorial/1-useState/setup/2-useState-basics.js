import React, { useState } from "react";

const UseStateBasics = () => {
  // const value = useState(1)[0];
  // const handler = useState(1)[1];
  // console.log(value, handler);
  const [text, setText] = useState("Daniel");
  const [title, setTitle] = useState("random title");
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    let names = ["Daniel", "David", "Diego", "Aaban"];
    let random = Math.floor(Math.random() * 4);
    setText(names[random]);
  };

  const counterFunc = () => {
    setCounter(counter + 1);
  };

  const changeTitle = () => {
    if (title === "random title") {
      setTitle("Hello World");
    } else {
      setTitle("random title");
    }
  };

  return (
    <React.Fragment>
      <h1>{text}</h1>
      <br />
      <button className="btn" onClick={() => handleClick()}>
        Change Name
      </button>
      <br />
      <h2>{counter}</h2>
      <button type="button" className="btn" onClick={() => counterFunc()}>
        Add Counter
      </button>
      <br />
      <h2>{title}</h2>
      <button type="button" className="btn" onClick={() => changeTitle()}>
        Change Title
      </button>
    </React.Fragment>
  );
};
export default UseStateBasics;
