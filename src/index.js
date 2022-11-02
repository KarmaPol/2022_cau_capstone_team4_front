import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ScrollTop from "./components/ScrollTop";

ReactDOM.render(
  <BrowserRouter>
    <ScrollTop />
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
