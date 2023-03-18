import React, { useState } from "react";

import LessonCard from "../LessonCard";
import Skeleton from "../Skeleton";

import classes from "./LessonsDashboard.module.scss";

const CoursesDashboard = ({ lessons, currentLesson, setCurrentLesson }) => {

  //   const skeletons = [...new Array(8)].map((_, index) => (
  //     <Skeleton key={index} />
  //   ));

  return (
    <div className={classes.lessons}>
      {lessons.map((lesson, index) => (
        <LessonCard
          index={index}
          currentLesson={currentLesson}
          key={lesson.id}
          {...lesson}
          setLesson={() => setCurrentLesson(index)}
        />
      ))}
    </div>
  );
};

export default CoursesDashboard;
