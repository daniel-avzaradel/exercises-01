import React from "react";
import "./app.css";

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
    <>
      <div className="container">
        <hr />
        <div className="row">
          <p>Cloud-hosted environment</p>
          <p>Enjoy your IDE portable workspace</p>
          <button>Cloud IDE</button>
        </div>
        <hr />

        <div className="row">
          <p>File Manager</p>
          <p>
            Navigate easily to different folders, upload or download
            files/folders.
          </p>
          <button>File Expolorer</button>
        </div>
        <hr />

        <div className="row">
          <p>Cloud-hosted environment</p>
          <p>Enjoy your IDE portable workspace</p>
          <button>Cloud IDE</button>
        </div>
        <hr />

        <div className="row">
          <p>Cloud-hosted environment</p>
          <p>Enjoy your IDE portable workspace</p>
          <button>Cloud IDE</button>
        </div>
        <hr />
      </div>
    </>
  );
}

export default App;
