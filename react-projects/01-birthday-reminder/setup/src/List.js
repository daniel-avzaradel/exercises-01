import React from "react";

const List = ({ people }) => {
  return (
    <>
      <h2>list component</h2>
      <br />

      {people.length === 0 ? <h3>no new birthdays</h3> : ""}

      {people.map((person) => {
        const { id, name, age, image } = person;

        return (
          <article key={id} className="person">
            <img src={image} alt="" />
            <div>
              <h4>{name}</h4>
              <p>{age} years old</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
