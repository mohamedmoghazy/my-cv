import React, { useState, useEffect } from "react";
import SectionElement from "./SectionElement.jsx";
import ResumeSection from "./ResumeSection.jsx";
import workExperience from "../Data/WorkExperience.jsx";
import styles from "./ResumeCard.module.css";
import skillsArray from "../Data/Skills.jsx";
import AnimatedProgressBar from "./AnimatedProgressBar.jsx";
import { MdOutlineScubaDiving } from "react-icons/md";
import { GiTennisRacket } from "react-icons/gi";
import { IoGameController } from "react-icons/io5";

const ResumeCard = () =>
{
    const hobbiesArray = [
        { icon: IoGameController, text: "Video Games" },
        { icon: MdOutlineScubaDiving, text: "Diving" },
        { icon: GiTennisRacket, text: "Tennis" },
    ];

    const [skills, setSkills] = useState([]);

    // ✅ Preload all images from assets using `import.meta.glob`
    const icons = import.meta.glob("../assets/*.svg", { eager: true });

    useEffect(() =>
    {
        const loadIcons = () =>
        {
            const loadedSkills = skillsArray.map((skill) =>
            {
                const iconPath = `../assets/${skill.icon}`;
                return { ...skill, icon: icons[iconPath]?.default || "" };
            });
            setSkills(loadedSkills);
        };

        loadIcons();
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.background}>
                <div className={styles.ResumeCard}>
                    {/* Left Section */}
                    <ResumeSection title="Work Experience" number="01">
                        <div className={styles.content}>
                            {workExperience.map((experience, index) => (
                                <SectionElement
                                    key={index}
                                    year={experience.year}
                                    title={experience.title}
                                    location={experience.location}
                                    details={experience.details}
                                />
                            ))}
                        </div>
                        <div className={styles.tileLineElement}>Start 2011</div>
                    </ResumeSection>
                    {/* Separation Line */}
                    <div className={styles.seperator}></div>

                    {/* Right Section */}
                    <section>
                        <ResumeSection title="Education" number="02">
                            <ul>
                                <li>
                                    <h3>B.Sc. in Computer Science</h3>
                                    <h4>6th of October University, Egypt</h4>
                                    <br />
                                    <br />
                                    2006 - 2011.
                                </li>

                                <li>
                                    <span className={styles.subTitle}>Full-Stack Web/App Dev Bootcamp</span>
                                    WBS Coding School, Berlin
                                    <br />
                                    <br />
                                    May 2024 - Oct 2024.
                                </li>
                            </ul>
                        </ResumeSection>

                        <ResumeSection title="Skills" number="03">
                            <div className={styles.grid}>
                                {skills.map((skill, index) => (
                                    <div key={index} className={styles.item}>
                                        <img src={skill.icon} alt={skill.text} className={styles.skillIcon} />
                                        <p>{skill.text}</p>
                                    </div>
                                ))}
                            </div>
                        </ResumeSection>

                        <ResumeSection title="Languages" number="04">
                            <div className={styles.gridLanguages}>
                                <div className={styles.languagesBar}>
                                    <AnimatedProgressBar className={styles.icon} value={90} />
                                    <p>English</p>
                                </div>

                                <div className={styles.languagesBar}>
                                    <AnimatedProgressBar className={styles.icon} value={70} />
                                    <p>German</p>
                                </div>

                                <div className={styles.languagesBar}>
                                    <AnimatedProgressBar className={styles.icon} value={100} />
                                    <p>Arabic</p>
                                </div>
                            </div>
                        </ResumeSection>

                        <ResumeSection title="Hobbies" number="05">
                            <div className={styles.gridHobbies}>
                                {hobbiesArray.map((hobby, index) => (
                                    <div key={index} className={styles.hobbyitem}>
                                        <hobby.icon className={styles.skillIcon} />
                                        <p>{hobby.text}</p>
                                    </div>
                                ))}
                            </div>
                        </ResumeSection>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default ResumeCard;
