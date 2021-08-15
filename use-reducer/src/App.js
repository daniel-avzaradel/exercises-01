import React from "react";
import { Switch, Link } from "react-router-dom";

const Home = () => {
  return <h1>Home</h1>;
};

const About = () => {
  return <h1>About</h1>;
};

const MyProjects = () => {
  return <h1>My Projects</h1>;
};

function App() {
  return (
    <div>
      <h1>APP</h1>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/myproject" component={MyProjects} />
      </Switch>
    </div>
  );
}

export default App;
