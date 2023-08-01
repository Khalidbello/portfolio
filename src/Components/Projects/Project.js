import styles from "./projects.module.css";
import Slide from "./Slides.js";
import { useState, useRef } from "react";

const Project = ({ data }) => {
  const [projectPage, setProjectPage] = useState(0);
  const projecPageLength = data.length - 1;
  let swipe;
  let touchStartX = 0;
  let touchEndX = 0;
  const threshold = 50;
  const animation = { transform: `translateX(-${projectPage * 100}%)` };

  const touchStart = (event) => {
    swipe = true;
    touchStartX = event.touches["0"].clientX;
  };

  const touchMove = (event) => {
    touchEndX = event.touches["0"].clientX;
    if (swipe) scroller();
  };

  const scroller = () => {
    const swipeDiff = touchEndX - touchStartX;

    if (swipeDiff > threshold ) {
      if (projectPage === 0) {
        setProjectPage(projecPageLength);
      } else {
       setProjectPage(projectPage - 1);
      };
      swipe = false;
    } else if (swipeDiff < -threshold) {
      if (projectPage === projecPageLength) {
        setProjectPage(0);
      } else {
        setProjectPage(projectPage + 1);
      };
      swipe = false;
    };
  }; // end of scroller

  return (
    <div className={`${styles.project} border-r10 ml-19 mr-11 mb-19`}>
      <h3 className={`${styles.project_name} ml-11 mb-15`}>BotSub</h3>

      <p class="ml-11 mb-11 font-size-14">
        A vtu site thats make airtime and data purchase easy. Integrated with
        facebook chat bot to enable users buy data even on freemode
      </p>
      <div className={styles.slide_holder}>
        <div
          class={styles.slide}
          onTouchStart={touchStart}
          onTouchMove={touchMove}
          style={animation}
        >
          {data.map((ele, index) => (
            <Slide key={index} />
          ))}
        </div>
      </div>
      <div
        className={`${styles.indicators} flex flex-al-cent flex-jst-cent 
       mt-7`}
      >
        {data.map((ele, index) => (
          <span
            key={index}
            className={`${projectPage === index ? "bg-p1" : "bg-ash4"} mr-3`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Project;
