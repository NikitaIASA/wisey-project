import React from "react";

import LessonDashboardCard from "../LessonDashboardCard";
// import Skeleton from "../Skeleton";

import classes from "./LessonDashboard.module.scss";

const LessosDashboard = ({ lessons, currentLesson, setCurrentLesson }) => {

  //   const skeletons = [...new Array(8)].map((_, index) => (
  //     <Skeleton key={index} />
  //   ));

  return (
    <div className={classes.lessons}>
      {lessons && lessons.map((lesson, index) => (
        <LessonDashboardCard
          key={lesson.id}
          index={index}
          currentLesson={currentLesson}
          setLesson={() => setCurrentLesson(index)}
          {...lesson}
        />
      ))}
    </div>
  );
};

export default LessosDashboard;
