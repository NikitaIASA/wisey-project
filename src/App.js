import React from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import CourseDetails from "./pages/CourseDetails";
import HomePage from "./pages/Home";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/character/:id" element={<CourseDetails />} />
      </Route>
    </Routes>
  );
}

export default App;