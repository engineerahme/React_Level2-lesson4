import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { HelmetProvider } from "react-helmet-async";
import App from './App';
import { DataProvider } from "../src/context/Datacontext";



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <DataProvider>
        <App />
      </DataProvider>
    </HelmetProvider>
  </React.StrictMode>
);
