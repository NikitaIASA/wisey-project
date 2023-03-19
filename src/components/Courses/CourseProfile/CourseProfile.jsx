import React, { useState, useRef } from "react";
import { useParams } from "react-router-dom";

import VideoPlayer from "../../ui/VideoPlayer";
import LessonDashboard from "../../Lessons/LessonDashboard";

const CourseProfile = ({ lessons }) => {
  const { id } = useParams();

  const [currentLesson, setCurrentLesson] = useState(0);
  const playerRef = useRef(null);
  
  console.log(lessons);
  console.log(currentLesson);

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
  
    // player.on("waiting", () => {
    //   VideoPlayer.log("player is waiting");
    // });
  
    const courseId = id; 
    const lessonId = lessons[currentLesson].id; // Assuming lesson objects have an "id" property
    
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
  
    // player.on("dispose", () => {
    //   VideoPlayer.log("player will dispose");
    // });
  };

  return (
    <>
      <VideoPlayer options={videoOptions} onReady={handlePlayerReady} />
      <LessonDashboard lessons={lessons} currentLesson={currentLesson} setCurrentLesson={setCurrentLesson}/>
    </>
  );
};

export default CourseProfile;
