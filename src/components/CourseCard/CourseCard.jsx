import React, { useRef } from "react";
import { Link } from "react-router-dom";
import VideoPlayer from "../VideoPlayer";
import { useSnackbar } from 'notistack';

import classes from "./CourseCard.module.scss";

const CourseCard = ({
  course: {
    id,
    title,
    tags,
    previewImageLink,
    meta: { courseVideoPreview },
    lessonsCount,
    rating,
  },
}) => {
  const playerRef = useRef(null);
  const { enqueueSnackbar } = useSnackbar();
  //!!!
  const link = courseVideoPreview && courseVideoPreview.link ? courseVideoPreview.link : "https://wisey.app/videos/lack-of-motivation-how-to-overcome-it/preview/AppleHLS1/preview.m3u8"

  const handlePlayerReady = (player) => {
    playerRef.current = player;
    player.muted(true);

    player.on("mouseover", () => {
      const playPromise = player.play();
      if (playPromise !== undefined) {
        playPromise
          .then(function () {
            // Automatic playback started!
          })
          .catch(function (error) {
             // enqueueSnackbar("This video preview doesn't work", {variant: 'error'})
            // Automatic playback failed.
          });
      }
    });

    player.on("mouseout", () => {
      player.pause();
    });
  };

  const videoOptions = {
    responsive: true,
    fluid: true,
    sources: [
      {
        src: link,
        type: "application/x-mpegURL",
      },
    ],
    poster: `${previewImageLink}/cover.webp`,
    techOrder: ["html5"],
  };

  return (
    <div className={classes.card}>
      <Link to={`./course/${id}`}>
        <div className={classes.cardWrap}>
          <VideoPlayer className={classes.player} options={videoOptions} onReady={handlePlayerReady} />
          {/* <img
              className={classes.previewImageLink}
              src={`${previewImageLink}/cover.webp`}
              alt={previewImageLink}
            /> */}
          <div className={classes.description}>
            <h2 className={classes.title}>{title}</h2>
            <p className={classes.lessons}>{lessonsCount} lessons</p>
            <p className={classes.rating}>{rating}/5</p>
          </div>
          <ul className={classes.tags}>
              {tags.map((tag) => (
                <li className={classes.tag} key={tag}>
                  {tag}
                </li>
              ))}
            </ul>
        </div>
      </Link>
    </div>
  );
};

export default CourseCard;