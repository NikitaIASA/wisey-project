import React, { useState } from "react";
import LessonsDashboard from "../LessonsDashboard";

import classes from "./CourseDetails.module.scss";

import VideoPlayer from "../VideoPlayer";

const CourseDetails = ({ lessons }) => {
  const [currentLesson, setCurrentLesson] = useState(0);

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

  return (
    <>
      <VideoPlayer options={videoOptions} />
      <LessonsDashboard lessons={lessons} currentLesson={currentLesson} setCurrentLesson={setCurrentLesson}/>
    </>
  );
};

export default CourseDetails;
