import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import Books from "./Books";
import Book from "./Book";

function Booklist() {
  return (
    <section className="booklist">
      {Books.map((item, i) => {
        return <Book {...item} key={i} />;
      })}
    </section>
  );
}

ReactDOM.render(<Booklist />, document.getElementById("root"));
