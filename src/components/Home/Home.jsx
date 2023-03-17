import React, { useState } from "react";

import CoursesDashboard from "../CoursesDashboard";
import NotFound from "../NotFound";
import Pagination from "../Pagination/Pagination";
import logo from "../../assets/img/logo.jpg";

import classes from "./Home.module.scss";

const Home = ({ courses, isLoading }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [coursiesPerPage] = useState(10);

  const lastCourseIndex = currentPage * coursiesPerPage;
  const firstCourseIndex = lastCourseIndex - coursiesPerPage;
  const currentCourse = courses.slice(firstCourseIndex, lastCourseIndex);

  const selectPageHandler = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <img className={classes.logo} src={logo} alt="logo" />
      {courses ? (
        <CoursesDashboard courses={currentCourse} isLoading={isLoading} />
      ) : (
        <NotFound />
      )}
      <Pagination
        coursiesPerPage={coursiesPerPage}
        totalCourses={courses.length}
        selectPageHandler={selectPageHandler}
      ></Pagination>
      <div className={classes.navigation}>
        <button
          className={classes.navigationButton}
          onClick={() => setCurrentPage((prev) => prev - 1)}
        >
          Prev page
        </button>
        <button
          className={classes.navigationButton}
          onClick={() => setCurrentPage((prev) => prev + 1)}
        >
          Next page
        </button>
      </div>
    </>
  );
};

export default Home;
