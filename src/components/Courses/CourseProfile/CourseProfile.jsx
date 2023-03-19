import React, { useState, useRef } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

import VideoPlayer from "../../ui/VideoPlayer";
import LessonDashboard from "../../Lessons/LessonDashboard";
import arrowBack from "../../../assets/img/arrowBack.svg";

import classes from "./CourseProfile.module.scss";

const CourseProfile = ({ lessons }) => {
  const sortedLessons = lessons && lessons.sort((a, b) => a.order - b.order); // Sorting lessons by order.
  
  const navigate = useNavigate();
  const { id } = useParams();
  const [currentLesson, setCurrentLesson] = useState(0);
  const playerRef = useRef(null);

  const videoOptions = {
    responsive: true,
    fluid: true,
    controls: true,
    sources: [
      {
        src: lessons[currentLesson].link,
        type: "application/x-mpegURL",
      },
    ],
    poster: `${lessons[currentLesson].previewImageLink}/lesson-${lessons[currentLesson].order}.webp`,
    techOrder: ["html5"],
    controlBar: {
      playToggle: true,
      volumePanel: {
        inline: false,
      },
      fullscreenToggle: true,
      customControlSpacer: true,
    },
  };

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    const courseId = id;
    const lessonId = lessons[currentLesson].id; // Assuming lesson objects have an "id" property

    // Logic for saving videoProgress to localStorage
    if (localStorage.getItem(courseId)) {
      const lessonsData = JSON.parse(localStorage.getItem(courseId));
      const currentLessonTime = lessonsData[lessonId] || 0;
      player.currentTime(currentLessonTime);
    }

    player.on("timeupdate", () => {
      const lessonsData = JSON.parse(localStorage.getItem(courseId)) || {};
      localStorage.setItem(
        courseId,
        JSON.stringify({
          ...lessonsData,
          [lessonId]: player.currentTime(),
        })
      );
    });
  };

  return (
    <>
      <Link className={classes.back} to={navigate(-1)}>
        <img className={classes.back__img} src={arrowBack} alt="arrowBack" />
        <span className={classes.back__text}>Go Back</span>
      </Link>

      {lessons && (
        <>
          <VideoPlayer 
            className={classes.video} 
            options={videoOptions} 
            onReady={handlePlayerReady} 
          />

          <LessonDashboard
            lessons={sortedLessons}
            currentLesson={currentLesson}
            setCurrentLesson={setCurrentLesson}
          />
        </>
      )}
    </>
  );
};

export default CourseProfile;
