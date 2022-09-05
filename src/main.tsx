import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Mikrofrontend from "./Mikrofrontend";

ReactDOM.render(
  <React.StrictMode>
    <div className="page-wrapper">
      <div className="page-layout">
        <main>
          <Mikrofrontend />
        </main>
      </div>
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
