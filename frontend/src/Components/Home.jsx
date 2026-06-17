import React, { useEffect } from "react";
import styles from "./Home.module.css";
import { Link as RouterLink } from "react-router-dom";
// import curvedImageSrc from "../assets/HeroImage.jpg";
import CodeBackground from "./CodeBackground.jsx";
import HeroImageSVG from "./HeroImageSVG.jsx";

const Hero = () =>
{
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.name}>
          Mohamed Moghazi
        </h1>
        <h1 className={styles.title}>
          Software Engineer
        </h1>
                <p className={styles.description}>
          Software Engineer with 14+ years of experience in game development, AR/VR, and interactive software. Specialized in Unity, C#, gameplay systems, and multiplayer experiences. Shipped titles at Chimera Entertainment and Freeletics, and currently working as a Freelance Software Engineer.
        </p>
        <div className={styles.LearnmoreBtnContainer}>
          <RouterLink to="/resume" className={styles.LearnmoreBtn}>Learn more </RouterLink>
          <p className={styles.LearnMoreBtnAfter}>arrow_forward</p>
        </div>
      </div>

      <HeroImageSVG />


    </section>
  );
};

export default Hero;

