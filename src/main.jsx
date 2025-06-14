import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./App.css";
import { ThemeProvider } from "./context/ThemeContext";
import { WaterProvider } from "./context/WaterContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ThemeProvider>
      <WaterProvider>
        <App />
      </WaterProvider>
    </ThemeProvider>
  </React.StrictMode>
);
