import React from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./components/UI/Layout";
import NotFound from "./components/UI/NotFound";
import CoursePage from "./pages/Course";
import HomePage from "./pages/Home";

const App = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<HomePage />} />
      <Route path="/course/:id" element={<CoursePage />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  </Routes>
);

export default App;