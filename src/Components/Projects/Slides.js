import styles from "./projects.module.css";
import View from "./../Svg/View.js";

const Slides = () => {
  return (
    <div className={`${styles.container}`}>
      <div class="bg-ash2 l-border border-r10 ml-30 mr-30 pl-7 pb-7 pr-7 pt-7">
        <img
          className={`${styles.img} border-r10`}
          src="favicon.ico"
          alt="landing page"
        />
        <p class="flex flex-al-cent flex-jst-btw mt-7 color-p1 font-size-12">
          <span>Landing Page</span>
          <a>
            <View />
          </a>
        </p>
      </div>
    </div>
  );
};

export default Slides;
