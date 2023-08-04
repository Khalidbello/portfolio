import { Link } from "react-scroll";
import styles from "./menu.module.css";
import CancelIcon from "./../Svg/CancelIcon";

const Menu = ({ anime, hide }) => {
  return (
    <div onClick={hide} className={styles.invicible}>
      <div
        style={anime}
        className={`${styles.menu} l-border bg-ash2 border-r10 pl-7 pr-7 pt-7 pb-7 txt-cent font-size-14`}
      >
        <CancelIcon />
        <Link
          onClick={hide}
          to="projects"
          offset={-70}
          duration={300}
          activeClass="active"
          spy={true}
          smooth={true}
        >
          My Projects
        </Link>
        <Link
          onClick={hide}
          to="reviews"
          offset={-70}
          duration={300}
          activeClass="active"
          spy={true}
          smooth={true}
        >
          Reviews
        </Link>
        <Link
          onClick={hide}
          to="about"
          offset={-70}
          duration={300}
          activeClass="active"
          spy={true}
          smooth={true}
        >
          About Me
        </Link>
        <Link
          onClick={hide}
          to="my-skills"
          offset={-70}
          duration={300}
          activeClass="active"
          spy={true}
          smooth={true}
        >
          My Skills
        </Link>
        <Link
          onClick={hide}
          to="contact-me"
          offset={-70}
          duration={300}
          activeClass="active"
          spy={true}
          smooth={true}
        >
          Contact Me
        </Link>
      </div>
    </div>
  );
};

export default Menu;
