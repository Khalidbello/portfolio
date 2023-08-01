import styles from "./skills.module.css";
import NodeJsIcon from "./../Svg/NodeJsIcon";
import ExpressIcon from "./../Svg/ExpressIcon";
import ReactIcon from "./../Svg/ReactIcon";
import MongoDbIcon from "./../Svg/MongoDbIcon";
import NextJsIcon from "./../Svg/NextJsIcon";
import CssIcon from "./../Svg/CssIcon";
import HtmlIcon from "./../Svg/HtmlIcon";
import GithubIcon from "./../Svg/GithubIcon";
import JsIcon from "./../Svg/JsIcon";
import GitIcon from "./../Svg/GitIcon";

let Skills = () => {
  return (
    <div id="my-skills" className={`${styles.skills} mb-35`}>
      <header className="font-size-24 ml-11 mb-19">My Skills</header>
      <div className={`${styles.skill_container} flex`}>
        <div className={styles.skill}>
          <NodeJsIcon />
          <span>Node Js</span>
        </div>

        <div className={styles.skill}>
          <ExpressIcon />
          <span>Express Js</span>
        </div>

        <div className={styles.skill}>
          <MongoDbIcon />
          <span>MongoDb</span>
        </div>

        <div className={styles.skill}>
          <ReactIcon />
          <span>React Js</span>
        </div>

        <div className={styles.skill}>
          <NextJsIcon />
          <span>Next Js</span>
        </div>

        <div className={styles.skill}>
          <HtmlIcon />
          <span>Html5</span>
        </div>

        <div className={styles.skill}>
          <CssIcon />
          <span>Css3</span>
        </div>

        <div className={styles.skill}>
          <JsIcon />
          <span>JavsScript</span>
        </div>

        <div className={styles.skill}>
          <GithubIcon />
          <span>Github</span>
        </div>

        <div className={styles.skill}>
          <GitIcon />
          <span>Git</span>
        </div>
      </div>
    </div>
  );
};

export default Skills;
