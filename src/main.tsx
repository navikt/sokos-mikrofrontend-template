import React from "react";
import ReactDOM from "react-dom/client";
import "./main.css";
import Mikrofrontend from "./Mikrofrontend";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <Mikrofrontend />
  </React.StrictMode>
);
