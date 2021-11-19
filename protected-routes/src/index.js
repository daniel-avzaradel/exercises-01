import React from "react";
import ReactDOM from "react-dom";
import { LandingPage } from "./landing.page";
import { AppLayout } from "./app.layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Protected React Router</h1>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/app" element={<AppLayout />} />
      </Routes>
    </div>
  );
}

const rootElem = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  rootElem
);
