import React from "react";
import { createRoot } from "react-dom/client";
import Cities from "./Cities";

import "./App.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
    
  
root.render (
    <div className="App">
      <h1>Challenge</h1>
      <h2>
       Move all cities into a new component
      </h2>
    <Cities />
    </div>
)