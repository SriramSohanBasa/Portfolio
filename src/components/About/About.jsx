import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="ML icon" />
            <div className={styles.aboutItemText}>
              <h3>ML Engineer</h3>
              <p>
                Experienced ML Engineer with a history of designing and
                implementing multiple high-impact machine learning models.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="AI Systems icon" />
            <div className={styles.aboutItemText}>
              <h3>AI Systems Developer</h3>
              <p>
                Expertise in building multimodal AI systems, integrating computer vision, NLP, and foundation models to solve complex problems.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Data Engineering icon" />
            <div className={styles.aboutItemText}>
              <h3>Data Engineer</h3>
              <p>
                Skilled in creating and optimizing data pipelines, feature engineering, and deploying models on cloud platforms like AWS and Azure.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Research icon" />
            <div className={styles.aboutItemText}>
              <h3>AI Researcher</h3>
              <p>
                Conducted research in machine learning, focusing on anomaly detection, clustering, and model optimization techniques.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Full Stack icon" />
            <div className={styles.aboutItemText}>
              <h3>Full Stack Developer</h3>
              <p>
                Experience building scalable MERN stack applications with a focus
                on performance and usability.
              </p>
            </div>
          </li>
        </ul>
      </div>
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};