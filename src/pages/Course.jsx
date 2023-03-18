import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { getCourseById } from "../api/wiseyApi";
import CourseDetails from "../components/CourseDetails/CourseDetails";

const CoursePage = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    async function loadCourseData() {
      try {
        const data = await getCourseById(id);
        setCourse(data);
      } catch (err) {
        console.log("There is an error with data fetchin!");
      }
    }

    loadCourseData();
  }, [id]);

  return course && (<CourseDetails {...course} />);
};

export default CoursePage;
