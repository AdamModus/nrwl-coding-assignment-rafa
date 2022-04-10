import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./app/app";
import { BackendService } from "./backend";
import { AppContextProvider } from "./context/AppContextManager";
import "./index.css";

const backend = new BackendService();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppContextProvider backendRef={backend}>
        <App />
      </AppContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
