import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:basa.s@northeastern.edu" >basa.s@northeastern.edu</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/sriram-sohan-basa/" target="_blank">linkedin.com/Sriram-sohan-basa</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/SriramSohanBasa" target="_blank">github.com/SriramSohanBasa</a>
        </li>
      </ul>
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </footer>
  );
};
