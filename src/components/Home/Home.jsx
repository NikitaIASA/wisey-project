import React, { useState } from "react";

import CourseDashboard from "../Courses/CourseDashboard";
import NotFound from "../ui/NotFound";
import Pagination from "../ui/Pagination/Pagination";
import logo from "../../assets/img/logo.jpg";

import classes from "./Home.module.scss";

const Home = ({ courses, isLoading }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [coursiesPerPage] = useState(10);

  const lastCourseIndex = currentPage * coursiesPerPage;
  const firstCourseIndex = lastCourseIndex - coursiesPerPage;
  const currentCourse = courses.slice(firstCourseIndex, lastCourseIndex);

  const selectPageHandler = (pageNumber) => setCurrentPage(pageNumber);

  const PrevPageHandler = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const NextPageHandler = () => {
    const maxPage = Math.ceil(courses.length / coursiesPerPage);

    if (currentPage < maxPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <>
      <img className={classes.logo} src={logo} alt="logo" />
      {courses ? (
        <CourseDashboard courses={currentCourse} isLoading={isLoading} />
      ) : (
        <NotFound />
      )}
      <Pagination
        className={classes.pagination}
        coursiesPerPage={coursiesPerPage}
        selectPageHandler={selectPageHandler}
        currentPage={currentPage}
        totalCourses={courses.length}
        PrevPageHandler={PrevPageHandler}
        NextPageHandler={NextPageHandler}
      />
    </>
  );
};

export default Home;
