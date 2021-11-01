import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./Question";
function App() {
  const [questions, setQuestions] = useState(data);
  const [hover, setHover] = useState(false);

  return (
    <div className="container">
      <h3>Questions and answers about login</h3>
      <section className="info">
        {questions.map((item) => {
          return <SingleQuestion {...item} key={item.id} />;
        })}
      </section>
    </div>
  );
}

export default App;
