
import React, { useEffect, useState } from 'react';
import styles from './Resume.module.css';
import resumeImage from '../../data/Resume.png'; // Import the image directly

// Named export of the Resume component
export const Resume = () => {
  // State to control modal open/close
  const [isModalOpen, setIsModalOpen] = useState(false);
  // State to control the fade-in effect
  const [isLoaded, setIsLoaded] = useState(false);

  // Effect to set the loaded state after component mounts
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Function to handle opening the modal
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  // Function to handle closing the modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className={styles.container} id="Resume">
      <h2 className={styles.title}>RESUME</h2>
      <p className={styles.description}>
      Discover my journey through a dynamic blend of technical expertise, innovative projects, 
      and professional experience in software development and data analytics. Click below to explore my detailed resume.
      </p>
      <div className={`${styles.content} ${isLoaded ? styles.loaded : ''}`}>
        {/* Small square to display the resume */}
        <div className={styles.smallSquare} onClick={handleOpenModal}>
          <img src={resumeImage} alt="Resume Thumbnail" />
        </div>
        {/* Modal to display the resume in a larger window */}
        <div className={`${styles.modal} ${isModalOpen ? styles.modalOpen : ''}`} onClick={handleCloseModal}>
          <div className={styles.modalContent}>
            <img src={resumeImage} alt="Resume" />
          </div>
        </div>
      </div>
    </section>
  );
};