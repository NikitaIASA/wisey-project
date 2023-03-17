import React from "react";
import { Link } from "react-router-dom";

import classes from "./CourseCard.module.scss";

const CourseCard = ({
  id,
  title,
  tags,
  previewImageLink,
  lessonsCount,
  rating,
  skills,
}) => {
  return (
    <div className={classes.card}>
      <Link to={`./course/${id}`}>
        <div className={classes.cardWrap}>
          <img
            className={classes.previewImageLink}
            src={`${previewImageLink}/cover.webp`}
            alt={previewImageLink}
          />
          <div className={classes.description}>
            <h2 className={classes.title}>{title}</h2>
            <p className={classes.lessons}>{lessonsCount} lessons</p>
            <p className={classes.rating}>{rating}/5</p>
            <p className={classes.skills}>{skills}</p>
            <div className={classes.tags}></div>
            <ul className={classes.tags}>
              {tags.map((tag) => (
                <li className={classes.tag} key={tag}>
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CourseCard;
