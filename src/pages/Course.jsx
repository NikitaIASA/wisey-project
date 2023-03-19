import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { getCourseById } from "../api/wiseyApi";
import CourseProfile from "../components/Courses/CourseProfile/CourseProfile";

const CoursePage = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    async function loadCourseData() {
      try {
        const data = await getCourseById(id);

        setCourse(data);
      } catch (err) {
        setCourse(null);
        
        console.log("There is an error with data fetchin!");
      }
    }

    loadCourseData();
  }, [id]);

  return course && (<CourseProfile {...course} />);
};

export default CoursePage;
