import React from "react";
import { Route, Routes } from "react-router-dom";
import Commission_Q from "./pages/Commission_Q";
import Commission_A from "./pages/Commission_A";
import Commission_page from "./pages/Commission_page";
import Commission_list from "./pages/Commission_list";
import Sign_in from "./pages/Sign_in";
import Sign_up from "./pages/Sign_up";
import MainPage from "./pages/MainPage";
import Commission_A_fix from "./pages/Commission_A_fix";
import Profile from "./pages/Profile";
import { ContextProvider } from "./components/ContextProvider";

function App() {
  if (process.env.NODE_ENV === "production") {
    console.log = function no_console() {};
    console.warn = function no_console() {};
  }
  return (
    <ContextProvider>
      <Routes>
        <Route path="" element={<MainPage />} />
        <Route path="/list" element={<Commission_list />} />
        <Route path="/page/:id" element={<Commission_page />} />
        <Route path="/question" element={<Commission_Q />} />
        <Route path="/answer/:id" element={<Commission_A />} />
        <Route path="/answer/fix/:qid/:aid" element={<Commission_A_fix />} />
        <Route path="/signin" element={<Sign_in />} />
        <Route path="/signup" element={<Sign_up />} />
        <Route path="/profile/:id" element={<Profile />} />
      </Routes>
    </ContextProvider>
  );
}

export default App;
