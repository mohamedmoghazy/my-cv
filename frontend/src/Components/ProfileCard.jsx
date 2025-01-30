import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import styles from "./ProfileCard.module.css";
import profile_img from "../assets/profile_img.png";
import TypingAnimation from "./TypingAnimation";

const ProfileCard = () =>
{
    return (
        <div className={styles.container} >
            <div className={styles.background} >
                < div className={styles.profileCard} >
                    <img
                        src={profile_img}
                        alt="Mohamed Moghazi"
                        className={styles.profileImage}
                    />

                    <div className={styles.profileDetails}>
                        <h2 className={styles.greeting}>Hi!</h2>
                        <h1 className={styles.name}>I'm Mohamed Moghazi</h1>
                        <div className={styles.details}>
                            <p><span className={styles.label}>RESIDENCE:</span> GERMANY</p>
                            <p><span className={styles.label}>CITY:</span> BONN</p>
                            <p>
                                <span className={styles.label}>EMAIL:</span>{" "}
                                <a href="mailto:Eng.moghazy@gmail.com" className={styles.link}>Eng.moghazy@gmail.com</a>
                            </p>
                            <p><span className={styles.label}>PHONE:</span> +49 (0) 15229018095</p>
                        </div>
                        <div className={styles.socialLinks}>
                            <a href="#" className={styles.socialLink}>
                                <FaLinkedin className={styles.icon} /> LinkedIn
                            </a>
                            <a href="#" className={styles.socialLink}>
                                <FaGithub className={styles.icon} /> GitHub
                            </a>
                        </div>
                        <p className={styles.codeTag}>
                            <TypingAnimation />
                        </p>
                    </div>
                </div>
            </ div>
        </div>
    );
};

export default ProfileCard;
