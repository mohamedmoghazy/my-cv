import React, { useState, useEffect } from 'react';
import SectionElement from './SectionElement.jsx';
import ResumeSection from './ResumeSection.jsx';
import workExperience from '../Data/WorkExperience.jsx';
import styles from './ResumeCard.module.css';
import skillsArray from '../Data/Skills.jsx';

const ResumeCard = () =>
{
    const [skills, setSkills] = useState([]);
    const skillsData = skillsArray;

    useEffect(() =>
    {
        const loadIcons = async () =>
        {
            const loadedSkills = await Promise.all(
                skillsData.map(async (skill) =>
                {
                    const icon = await import(`../assets/${skill.icon}`);

                    return { ...skill, icon: icon.default };
                })
            );
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
                                <li> <h3>B.Sc. in Computer Science</h3>
                                    <h4>6th of October University, Egypt</h4>
                                    <br /><br />
                                    2006 - 2011.
                                </li>

                                <li>
                                    <span className={styles.subTitle}>Full-Stack Web/App Dev Bootcamp</span>
                                    WBS Coding School, Berlin
                                    <br /><br />
                                    May 2024 - Oct 2024.
                                </li>
                            </ul>
                        </ResumeSection>

                        <ResumeSection title="Skills" number="03">
                            <div className={styles.skillsGrid}>
                                {skills.map((skill, index) => (
                                    <div key={index} className={styles.skillItem}>
                                        <img src={skill.icon} alt={skill.text} className={styles.skillIcon} />
                                        <p>{skill.text}</p>
                                    </div>
                                ))}
                            </div>
                        </ResumeSection>
                    </section>
                </div>
            </div>
        </div >
    );
};

export default ResumeCard;