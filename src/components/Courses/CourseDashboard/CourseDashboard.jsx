import React from "react";

import CourseDashboardCard from "../CourseDashboardCard";
import Skeleton from "../../UI/Skeleton";

import classes from "./CourseDashboard.module.scss";

const CourseDashboard = ({ courses, isLoading }) => {
  const skeletons = [...new Array(10)].map((_, index) => (
    <Skeleton key={index} />
  ));

  return (
    <div className={classes.courses}>
      {isLoading
        ? skeletons
        : courses &&
          courses.map((course) => <CourseDashboardCard key={course.id} {...course} />)}
    </div>
  );
};

export default CourseDashboard;
