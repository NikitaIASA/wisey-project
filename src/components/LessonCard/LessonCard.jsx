import React from "react";

import classes from "./LessonCard.module.scss";

const LessonCard = ({ title, status, previewImageLink, currentLesson, index, order, setLesson }) => {
  return (
    <div className={`${classes.card} ${currentLesson === index ? classes.active : ""}`} onClick={setLesson}>
      <div className={classes.cardWrap}>
        <img
          className={classes.previewImageLink}
          src={`${previewImageLink}/lesson-${order}.webp`}
          alt={previewImageLink}
        />
        <div className={classes.description}>
          <p className={classes.lessonOrder}>Lesson {order}</p>
          <h2 className={classes.title}>{title}</h2>
        </div>
      </div>
    </div>
  );
};

export default LessonCard;
