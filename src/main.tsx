import React from "react";
import ReactDOM from "react-dom/client";
import Mikrofrontend from "./Mikrofrontend";
import "./main.css";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <div className="page-wrapper">
      <div className="page-layout">
        <main>
          <Mikrofrontend />
        </main>
      </div>
    </div>
  </React.StrictMode>
);
