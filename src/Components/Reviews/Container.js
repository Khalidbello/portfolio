import styles from "./reviews.module.css";
import LeftQuote from "./../Svg/LeftQuote.js";
import RightQuote from "./../Svg/RightQuote.js";

const Container = () => {
  return (
    <div className={styles.container}>
      <div
        className={`${styles.review} bg-ash2 l-border border-r10 mr-25 ml-25
        pl-11 pr-11 pt-11 pb-11`}
      >
        <LeftQuote />
        <span className={styles.review_write}>
          &nbsp; Khalid is a skilled web developer who demonstrates expertise in
          front-end and back-end technologies. His clean code and attention to
          detail result in efficient and user-friendly websites. He's a valuable
          asset to any development team.
        </span>
        <RightQuote />
        <div
          className={`${styles.customer} mt-25 flex flex-al-cent
           flex-jst-cent`}
        >
          <img className="bg-ash3" src="favicon.ico" alt="review" /> &nbsp;
          <div
            className="flex flex-flow-col flex-al-start 
            flex-sp-cent"
          >
            <span className="font-size-16">Fawas Bello</span>
            <span className="font-size-12">web developer</span>
          </div>
        </div>
      </div>
    </div>
  );
}; // end of Container

export default Container;
