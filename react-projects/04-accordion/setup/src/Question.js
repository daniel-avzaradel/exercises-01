import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = (item) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="question">
      <header>
        <h4>{item.title} </h4>
        <button className="btn" onClick={() => setOpen(!open)}>
          {open ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {open ? <span>{item.info}</span> : <span></span>}
    </div>
  );
};

export default Question;
