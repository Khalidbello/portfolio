import styles from "./reviews.module.css";
import Container from "./Container.js";
import { useState, useRef } from "react";

const reviews = [{}, {}, {}, {}, {}];

const Reviews = () => {
  const [reviewNum, setReviewNum] = useState(0);
  const slideRef = useRef(null);
  const reviewLength = reviews.length - 1;
  let swipe;
  let touchStartX = 0;
  let touchEndX = 0;
  const threshold = 50;
  const animation = { transform: `translateX(-${reviewNum * 100}%)` };

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
      if (reviewNum === 0) {
        setReviewNum(reviewLength);
      } else {
        setReviewNum(reviewNum - 1);
      }
      swipe = false;
    } else if (swipeDiff < -threshold) {
      if (reviewNum === reviewLength) {
        setReviewNum(0);
      } else {
        setReviewNum(reviewNum + 1);
      };
      swipe = false;
    }
  }; // end of scroller

  return (
    <div id="reviews" className={`{$styles.reviews} mb-35`}>
      <div className="font-size-24 ml-11 mb-15">Reviews</div>

      <div className={styles.slide_holder}>
        <div
          onTouchStart={touchStart}
          onTouchMove={touchMove}
          ref={slideRef}
          style={animation}
          id="slide"
          className={styles.slide}
        >
          {reviews.map((ele, index) => (
            <Container key={index} />
          ))}
        </div>
      </div>

      <div
        className={`${styles.indicators} flex flex-al-cent flex-jst-cent 
        mt-11`}
        id="indicators"
      >
        {reviews.map((ele, index) => (
          <span
            key={index}
            className={`${reviewNum === index ? "bg-p1" : "bg-ash4"} mr-3`}
          ></span>
        ))}
      </div>
    </div>
  );
};
// end 0f Reviews

export default Reviews;
