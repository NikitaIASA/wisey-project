import React, { useState, useEffect } from "react";

import { getCourses } from "../api/wiseyApi";

import Home from "../components/Home";

const HomePage = () => {
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchCourses() {
      setIsLoading(true);
      try {
        const data = await getCourses();
        setCourses(data.courses);
        setIsLoading(false);
      } catch (err) {
        setCourses(null);
        setIsLoading(false);
        console.log("There is an error with data fetchin!");
      }
    }

    fetchCourses();
  }, []);

  return <Home courses={courses} isLoading={isLoading} />;
};

export default HomePage;
