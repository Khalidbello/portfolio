import styles from "./hero.module.css";
import DownArrow from "./../Svg/DownArrow.js";

const Hero = () => {
  return (
    <div className={`${styles.hero} bg-ash1 ml-7 mb-35`}>
      {/*<img className={styles.img} src="hro.jpg" />*/}
      <div className={`${styles.prompt} ml-3`}>
        <p className="font-size-24 mb-7">
          <span className="color-p1 font-size-24">Hy</span>, i am Khalid, a
          FullStack Web Developer Adept at Solving Business Problems With Tech.{" "}
        </p>
        <p className="font-size-14 mb-15">
          I Provide Astonishing Web Solutions That Helps To Scale Up Your
          Business
        </p>
        <button
          className={`${styles.button} bg-p1 color-w font-size-20 flex flex-al-cent flex-jst-btw`}
        >
          My Projects &nbsp;
          <DownArrow />
        </button>
      </div>
    </div>
  );
};

export default Hero;
