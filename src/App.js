import React from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import CoursePage from "./pages/Course";
import HomePage from "./pages/Home";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/course/:id" element={<CoursePage />} />
      </Route>
    </Routes>
  );
}

export default App;