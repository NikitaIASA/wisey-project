import React from "react";

import CoursesDashboard from "../CoursesDashboard";
import NotFound from "../NotFound"
import logo from '../../assets/img/logo.jpg';

import classes from "./Home.module.scss";

const Home = ({ courses, isLoading }) => (
  <>
    <img className={classes.logo} src={logo} alt="logo" /> 
    {courses 
      ? (
        <CoursesDashboard courses={courses} isLoading={isLoading}/>
     ) : (
        <NotFound />
    )}
  </>
);

export default Home;