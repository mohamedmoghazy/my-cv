import React from "react";
import { Link } from "react-router-dom";
import styles from "./ResumeCard.module.css";
import ResumeSection from "./ResumeSection";

const ResumeCard = () =>
{
    return (
        <div className={styles.container} >
            <div className={styles.background} >
                < div className={styles.ResumeCard} >

                    {/* Left Section */}
                    <>
                        <ResumeSection title="Education" number="01">
                            <div className={styles.content}>
                                <section className={styles.section}>
                                    <div>
                                        <div className={styles.tileLineElemenet}>2024 - present</div>
                                        {/* draw line */}
                                        <div className={styles.line}></div>

                                    </div>
                                    <div className={styles.textContent}>
                                        <h3> <Link>Freelance</Link> - Software Developer</h3>
                                        <h4>Munich - Fulltime</h4>
                                        <p>Contributed to the <Link>STÆDIUM</Link> platform</p>
                                        <ul>
                                            <li>Designed and developed the Unity3D Project for the platform, enabling seamless addition of new games.</li>
                                            <li>Mentored junior developers, promoting best practices in performance optimization, code refactoring, and debugging.</li>
                                            <li>Spearheaded efforts to improve platform scalability, focusing on high performance and maintainability.</li>
                                            <li>Collaborated across teams to align creative and technical requirements for a cohesive user experience.</li>
                                        </ul>
                                    </div>
                                </section>
                            </div>
                        </ResumeSection>
                    </>

                    {/* Separation Line */}
                    <div className={styles.seperator}></div>

                    {/* Right Section */}
                </div >
            </div>
        </div>

    );
};

export default ResumeCard;