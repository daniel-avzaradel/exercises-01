import React from "react";
import { useNavigate } from "react-router-dom";

export const AppLayout = () => {
  let navigate = useNavigate();

  return (
    <div className="landing_page">
      <h1>App Layout</h1>
      <button
        className="btn"
        onClick={() => {
          navigate("/");
        }}
      >
        {`<< `}Go Back
      </button>
    </div>
  );
};
