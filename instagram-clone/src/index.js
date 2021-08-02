import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import FirebaseContext from "./context/firebase";
import { firebase, FieldValue } from "./lib/firebase";

ReactDOM.render(
  <FirebaseContext.Provider value={{ firebase, FieldValue }}>
    <App />
  </FirebaseContext.Provider>,
  document.getElementById("root")
);

// client side rendered app: react (cra: cxreate-react-app)
// -> database: Firebase
// -> react-loading-skeleton
// -> tailwind

// architecture
// src:
// -> components, constants, context, helpers, lib (firebase lives here), services (firebase functions), styles (tailwind's folder app/tailwind)
