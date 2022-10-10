import React from "react";
import { Route, Routes } from "react-router-dom";
import Commission_Q from "./pages/Commission_Q";
import Commission_A from "./pages/Commission_A";
import Commission_page from "./pages/Commission_page";
import Sign_in from "./pages/Sign_in";
import Sign_up from "./pages/Sign_up";

function App() {
  return (
    <Routes>
      <Route path="" element={<Commission_page />} />
      <Route path="/question" element={<Commission_Q />} />
      <Route path="/answer" element={<Commission_A />} />
      <Route path="/signin" element={<Sign_in />} />
      <Route path="/signup" element={<Sign_up />} />
    </Routes>
  );
}

export default App;
