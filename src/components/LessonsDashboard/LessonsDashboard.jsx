import React from "react";

import LessonCard from "../LessonCard";
// import Skeleton from "../Skeleton";

import classes from "./LessonsDashboard.module.scss";

const CoursesDashboard = ({ lessons, currentLesson, setCurrentLesson }) => {

  //   const skeletons = [...new Array(8)].map((_, index) => (
  //     <Skeleton key={index} />
  //   ));

  return (
    <div className={classes.lessons}>
      {lessons && lessons.map((lesson, index) => (
        <LessonCard
          key={lesson.id}
          index={index}
          currentLesson={currentLesson}
          {...lesson}
          setLesson={() => setCurrentLesson(index)}
        />
      ))}
    </div>
  );
};

export default CoursesDashboard;