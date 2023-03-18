import React from "react";
import { useSnackbar } from 'notistack';

import classes from "./LessonCard.module.scss";

const LessonCard = ({
  title,
  status,
  previewImageLink,
  currentLesson,
  index,
  order,
  setLesson,
}) => {
  const { enqueueSnackbar } = useSnackbar();
  const isLocked = status === "locked";

  const lockNotify = () => {
    enqueueSnackbar("This lesson is locked", {variant: 'error'});
  }

  return (
    <div
      className={`${classes.card} ${isLocked ? classes.locked : ""} ${
        index === currentLesson ? classes.active : ""
      }`}
      onClick={!isLocked ? setLesson : lockNotify}
    >
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
