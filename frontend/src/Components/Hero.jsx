import React, { useEffect } from "react";
import styles from "./Hero.module.css";
import { Link } from "react-scroll";
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
          I’m Expert in game development, virtual reality (VR), and mixed reality (MR). Proficient in C# and JavaScript, React with hands-on experience in Games, AR, VR, Web and mobile applications, and UI/UX design. I will Transform your ideas into reality.
        </p>
        <div className={styles.LearnmoreBtnContainer}>
          <Link className={styles.LearnmoreBtn}>Learn more </Link>
          <p className={styles.LearnMoreBtnAfter}>arrow_forward</p>
        </div>
      </div>

      <HeroImageSVG  />


    </section>
  );
};

export default Hero;