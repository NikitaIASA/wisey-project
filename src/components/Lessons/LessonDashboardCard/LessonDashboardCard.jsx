import React from "react";
import { useSnackbar } from 'notistack';

import classes from "./LessonDashboardCard.module.scss";

const LOCKED = 'locked';

const LessonDashboardCard = ({
  title,
  status,
  previewImageLink,
  currentLesson,
  index,
  order,
  setLesson: onActiveVideoClick,
}) => {
  const { enqueueSnackbar } = useSnackbar();
  const isLocked = (status === LOCKED);

  const onLockedVideoClick = () => {
    enqueueSnackbar("This lesson is locked", { variant: 'error' });
  }

  return (
    <div
      className={`${classes.card} ${isLocked && classes.locked} ${
        index === currentLesson && classes.active
      }`}
      onClick={isLocked ? onLockedVideoClick : onActiveVideoClick}
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

export default LessonDashboardCard;
