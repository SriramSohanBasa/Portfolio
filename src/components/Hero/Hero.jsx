import React, { useEffect, useRef } from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = "translateY(0)";
          } else {
            entry.target.style.opacity = 0;
            entry.target.style.transform = "translateY(20px)";
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    const { current } = containerRef;
    observer.observe(current);

    return () => {
      observer.unobserve(current);
    };
  }, []);

  return (
    <section className={styles.container} ref={containerRef}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Sriram Sohan</h1>
        <p className={styles.description}>
          I'm a Machine learning enthusiast and Software Developer with an experience 
          in building complex applications with modern technologies.
        </p>
        <a href="mailto:basa.s@northeastern.edu" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/Hero.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
