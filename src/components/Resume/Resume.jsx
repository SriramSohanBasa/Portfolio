import React, { useEffect, useState } from 'react';
import styles from './Resume.module.css';
import resumeImage from '../../data/Resume.png'; 
import resumePDF from '../../data/SriramSohan_CV.pdf'; 

export const Resume = () => {
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const [isLoaded, setIsLoaded] = useState(false);

 
  useEffect(() => {
    setIsLoaded(true);
  }, []);


  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  
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
            <a href={resumePDF} download="SriramSohan_CV.pdf" className={styles.downloadButton}>
              Download PDF
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};