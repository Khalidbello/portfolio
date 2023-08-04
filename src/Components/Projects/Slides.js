import styles from "./projects.module.css";
import View from "./../Svg/View.js";

const Slides = ({ page: { sectionName, imageUrl, liveUrl } }) => {
  console.log("in slides ", sectionName, imageUrl, liveUrl);
  return (
    <div className={`${styles.container}`}>
      <div class="bg-ash2 l-border border-r10 ml-30 mr-30 pl-7 pb-7 pr-7 pt-7">
        <img
          className={`${styles.img} border-r10`}
          src={imageUrl}
          alt={sectionName}
        />
        <p className="flex flex-al-cent flex-jst-btw mt-7 color-p1 font-size-12">
          <span> {sectionName} </span>
          <a href={liveUrl}>
            <View />
          </a>
        </p>
      </div>
    </div>
  );
};

export default Slides;
