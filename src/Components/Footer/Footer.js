import styles from "./footer.module.css";
import WatsaapIcon from "./../Svg/WatsaapIcon.js";
import TwitterIcon from "./../Svg/TwitterIcon.js";
import LinkdinIcon from "./../Svg/LinkdinIcon.js";
import FacebookIcon from "./../Svg/FacebookIcon.js";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className={`${styles.footer} pl-11 pr-11 pt-11 pb-11`}>
      <button
        className={`${styles.button} color-w bg-p1 font-size-18 flex flex-al-cent flex-jst-ar`}
      >
        {" "}
        Download CV{" "}
      </button>

      <h3 className="mt-25">Social</h3>

      <div className={`${styles.social} mb-25 ml-11 mt-11`}>
        <WatsaapIcon />
        <TwitterIcon />
        <LinkdinIcon />
        <FacebookIcon />
      </div>

      <h4>Quick Links</h4>
      <div className={`${styles.link} pl-15`}>
        <Link
          activeClass="active"
          to="reviews"
          smooth={true}
          spy={true}
          offset={-70}
          duration={500}
        >
          Reviews
        </Link>
        <Link
          activeClass="active"
          to="projects"
          smooth={true}
          spy={true}
          offset={-70}
          duration={500}
        >
          My Projects
        </Link>
        <Link
          to="my-skills"
          offset={-70}
          duration={500}
          activeClass="active"
          spy={true}
          smooth={true}
        >
          My Skills
        </Link>
        <Link
          activeClass="about-me"
          to="reviews"
          smooth={true}
          spy={true}
          offset={-70}
          duration={500}
        >
          About Me
        </Link>
        <Link
          activeClass="active"
          to="contact-me"
          smooth={true}
          spy={true}
          offset={-70}
          duration={500}
        >
          Contact Me
        </Link>
      </div>

      <div class="txt-cent font-size-14 mt-11">
        &copy;2023 CodeNoJutsu All Right Reserved
      </div>
    </footer>
  );
};

export default Footer;
