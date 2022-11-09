import React from "react";
import { Route, Routes } from "react-router-dom";
import Commission_Q from "./pages/Commission_Q";
import Commission_A from "./pages/Commission_A";
import Commission_page from "./pages/Commission_page";
import Commission_list from "./pages/Commission_list";
import Sign_in from "./pages/Sign_in";
import Sign_up from "./pages/Sign_up";
import { ContextProvider } from "./components/ContextProvider";

function App() {
  return (
    <ContextProvider>
      <Routes>
        <Route path="" element={<Commission_list />} />
        <Route path="/page/:id" element={<Commission_page />} />
        <Route path="/question" element={<Commission_Q />} />
        <Route path="/answer/:id" element={<Commission_A />} />
        <Route path="/signin" element={<Sign_in />} />
        <Route path="/signup" element={<Sign_up />} />
      </Routes>
    </ContextProvider>
  );
}

export default App;
