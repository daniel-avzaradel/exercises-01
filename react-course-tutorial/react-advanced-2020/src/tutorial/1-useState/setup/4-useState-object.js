import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "Peter",
    age: 24,
    message: "random message",
  });

  const changeMessage = (person) => {
    if (person.message === "random message") {
      console.log(person.message);
      setPerson({ ...person, message: "hello world" });
    } else {
      setPerson({ ...person, message: "random message" });
    }
  };

  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button className="btn" onClick={() => changeMessage(person)}>
        Change Message
      </button>
    </>
  );
};

export default UseStateObject;
