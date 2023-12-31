import { StrictMode } from "react";
import "./index.css";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
