import React, { useState, useEffect } from "react";
const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState(["default user"]);

  const fetchData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    setUser(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return <h2>loading...</h2>;
  }

  const { id, name, avatar_url, login, html_url } = user;

  return (
    <ul>
      <div className="items">
        <img src={avatar_url} alt={login} />
        <h4>{name}</h4>
        <a href={html_url}>Profile</a>
      </div>
    </ul>
  );
};

export default MultipleReturns;
