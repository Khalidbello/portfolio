import styles from "./header.module.css";
import { useState } from "react";
import DarkIcon from "./../Svg/DarkIcon.js";
import LightIcon from "./../Svg/LightIcon.js";
import MenuIcon from "./../Svg/MenuIcon.js";

const Header = () => {
  const [isChecked, setIsChecked] = useState(false);
  const root = document.documentElement;

  const toggleMode = () => {
    setIsChecked(!isChecked);
    if (isChecked) {
      root.style.setProperty("--ash1", "#11111f");
      root.style.setProperty("--ash2", "#22222f");
      root.style.setProperty("--ash3", "#33333f");
      root.style.setProperty("--ash4", "#44444f");
      root.style.setProperty("--dark", "#11111f");
      root.style.setProperty("--border", "#383838");
      root.style.setProperty("--white", "#ffffff");
      root.style.setProperty("--ash5",  "#535353");
    } else {
      root.style.setProperty("--ash1", "#ffffff");
      root.style.setProperty("--ash2", "#eeeeef");
      root.style.setProperty("--ash3", "#dddddf");
      root.style.setProperty("--ash4", "#cccccf");
      root.style.setProperty("--dark", "#fff");
      root.style.setProperty("--border", "#d8d8d8");
      root.style.setProperty("--white", "#111");
      root.style.setProperty("--ash5",  "#aaaaaf");
    }
  }; // end of toggleMode;

  return (
    <header
      className={`${styles.header} bg-ash1 flex flex-jst-btw px-7 pt-3 pb-3 pl-7 pr-7`}
    >
      <div className="flex flex-al-cent">
        <span className="font-size-30 color-p1">&lt;</span>
        <span className="font-size-16">CodeNoJutsu</span>
        <span className="font-size-30 color-p1">/&gt;</span>
      </div>

      <div className="flex flex-al-cent flex-jst-ar">
        <input
          type="checkbox"
          id="toggle-mode"
          className={styles.toggle_mode}
          onChange={(e) => toggleMode()}
        />
        <label
          htmlFor="toggle-mode"
          className={`${styles.check_box} bg-ash3 mr-19 l-border`}
        >
          <span
            className="bg-p1 flex-inline flex-al-cent flex-jst-cent"
            id="mode-ball"
          >
            {isChecked ? <LightIcon /> : <DarkIcon />}
          </span>
        </label>
        <MenuIcon styles={styles.menu_icon} />
      </div>
    </header>
  );
};

export default Header;
