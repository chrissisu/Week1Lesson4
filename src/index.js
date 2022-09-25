import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./App.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="App">
      <h1>Challenge</h1>
      <h2>
        Make european cities blue and north american cities red from a CSS
      </h2>
      <li> Sydney </li>
      <li className="Europe"> Paris </li>
      <li className="NorthAmerican"> Montreal</li>
      <li className="Europe"> Lisbon </li>
      <li className="NorthAmerican"> San Francsico</li>
    </div>
  </StrictMode>
);
