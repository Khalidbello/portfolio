import styles from "./contact_me.module.css";
import { useState } from "react";

const ContactMe = () => {
  const [nameLabelAnimate, setNameLabelAnimate] = useState({});
  const [emailLabelAnimate, setEmailLabelAnimate] = useState({});
  const [messageLabelAnimate, setMessageLabelAnimate] = useState({});

  const focused = (setter) => {
    setter({
      bottom: "0",
      opacity: 1,
    });
  };

  return (
    <div id="contact-me" className="mb-35">
      <h3 className="ml-11 mb-15 font-size-24">Contact Me</h3>

      <form className={`${styles.mail} ml-15 pl-7 pr-7`}>
        <label
          style={nameLabelAnimate}
          htmlFor="name"
          className={`ml-11 ${styles.label_i}`}
        >
          Name
        </label>
        <input
          id="name"
          className="bg-ash2 pl-7 pt-7 pb-7 pr-7 border-r10 mb-11 mt-3"
          type="text"
          onFocus={() => focused(setNameLabelAnimate)}
        />

        <label
          style={emailLabelAnimate}
          htmlFor="name"
          className={`ml-11 ${styles.label_i}`}
        >
          Email
        </label>
        <input
          id="email"
          className="bg-ash2 pl-7 pt-7 pb-7 pr-7 border-r10 mb-11 mt-3"
          type="email"
          onFocus={() => focused(setEmailLabelAnimate)}
        />

        <label
          style={messageLabelAnimate}
          htmlFor="message"
          className={`ml-11 ${styles.label_a}`}
        >
          Message
        </label>
        <textarea
          id="message"
          className="bg-ash2 border-r10 pl-7 pt-7 pb-7 pr-7 mt-3"
          onFocus={() => focused(setMessageLabelAnimate)}
        ></textarea>

        <button className="mt-11 font-w-700 font-size-18 color-w border-r10 bg-p1">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactMe;
