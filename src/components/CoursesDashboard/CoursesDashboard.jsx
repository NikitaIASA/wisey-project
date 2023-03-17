import React from "react";

import CourseCard from "../CourseCard";
import Skeleton from "../Skeleton";

import classes from "./CoursesDashboard.module.scss";

const CoursesDashboard = ({ courses, isLoading }) => {
  const skeletons = [...new Array(8)].map((_, index) => (
    <Skeleton key={index} />
  ));

  return (
    <div className={classes.courses}>
      {isLoading
        ? skeletons
        : courses &&
          courses.map((course) => <CourseCard key={course.id} {...course} />)}
    </div>
  );
};

export default CoursesDashboard;
