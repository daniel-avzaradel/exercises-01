import React from "react";
import auth from "./auth";
import { useNavigate } from "react-router-dom";

export const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div className="landing_page">
      <h1>Landing Page</h1>
      <button
        className="btn"
        onClick={() => {
          auth.login(() => {
            navigate("/app");
          });
        }}
      >
        Login
      </button>
    </div>
  );
};
