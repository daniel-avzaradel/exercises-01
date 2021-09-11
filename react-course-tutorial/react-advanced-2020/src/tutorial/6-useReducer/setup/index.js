import React, { useState, useReducer } from "react";
import Modal from "./Modal";
import { data } from "../../../data";
// reducer function

const reducer = (state, action) => {
  console.log(state, action);
  if (action.type === "TESTING") {
    return {
      ...state,
      people: [
        ...data,
        { id: new Date().getTime().toString(), name: action.payload },
      ],
      isModalOpen: true,
      modalContent: "item added",
    };
  }
  throw new Error("no matching action type");
};
const defaultState = {
  people: data,
  isModalOpen: false,
  modalContent: "hello world",
};
const Index = () => {
  const [name, setName] = useState("");
  const [state, dispatch] = useReducer(reducer, defaultState);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      dispatch({ type: "TESTING", payload: name });
    } else {
      dispatch({ type: "RANDOM" });
    }
  };

  return (
    <>
      {state.isModalOpen && <Modal modalContent={state.modalContent} />}
      <form onSubmit={handleSubmit} className="form">
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type="submit">add</button>
      </form>
      {state.people.map((person) => {
        return (
          <div key={person.id}>
            <p>{person.name}</p>
          </div>
        );
      })}
    </>
  );
};

export default Index;
