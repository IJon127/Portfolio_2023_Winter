import { StrictMode } from "react";
import "./index.css";
import ReactDOM from "react-dom/client";
// import { Canvas } from "@react-three/fiber";
import { Loader } from "@react-three/drei";
import App from "./App.jsx";

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
