import styles from "./projects.module.css";
import Slide from "./Slides.js";
import { useState } from "react";

const Project = ({ data: { name, description, pages } }) => {
  const [projectPage, setProjectPage] = useState(0);
  const projecPageLength = pages.length - 1;
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

    if (swipeDiff > threshold) {
      if (projectPage === 0) {
        setProjectPage(projecPageLength);
      } else {
        setProjectPage(projectPage - 1);
      }
      swipe = false;
    } else if (swipeDiff < -threshold) {
      if (projectPage === projecPageLength) {
        setProjectPage(0);
      } else {
        setProjectPage(projectPage + 1);
      }
      swipe = false;
    }
  }; // end of scroller

  return (
    <div className={`${styles.project} border-r10 ml-19 mr-11 mb-19`}>
      <h3 className={`${styles.project_name} ml-11 mb-15`}> {name} </h3>

      <p className="ml-11 mb-11 font-size-14"> {description} </p>
      <div className={styles.slide_holder}>
        <div
          class={styles.slide}
          onTouchStart={touchStart}
          onTouchMove={touchMove}
          style={animation}
        >
          {pages.map((ele, index) => (
            <Slide key={index} page={ele} />
          ))}
        </div>
      </div>
      <div
        className={`${styles.indicators} flex flex-al-cent flex-jst-cent 
       mt-7`}
      >
        {pages.map((ele, index) => (
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
