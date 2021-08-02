import React from "react";

const List = ({ people }) => {
  console.log(people);

  return (
    <>
      <h2>list component</h2>
      <br />

      {people.map((person, i) => {
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
