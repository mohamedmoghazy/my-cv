import React from 'react';
import styles from './About.module.css';

const About = () =>
{
    return (
        <section className={styles.section}>
            <div className={styles.content}>
                <span className={styles.icon}>person</span>
                <h2 className={styles.title}>My Journey into Game Development</h2>
                <p className={styles.body}>
                    From a young age, I was captivated by the world of gaming. Growing up, I spent countless hours exploring virtual realms, fascinated by how games worked and what made them so immersive. This passion sparked my interest in programming, leading me to pursue a bachelor’s degree in Computer Science.
                </p>
                <div className={styles.line}></div>
            </div>

            <div className={styles.content}>
                <span className={styles.icon}>work</span>
                <h2 className={styles.title}>Professional Experience and Expertise</h2>
                <p className={styles.body}>
                    Over the past decade, I’ve built a rewarding career as a Unity3D developer, specializing in game development, augmented reality (AR), and virtual reality (VR). I’ve had the privilege of contributing to notable projects like XCOM Legends and STÆDIUM, where I balanced technical innovation with creative problem-solving.
                </p>
                <div className={styles.line}></div>
            </div>

            <div className={styles.content}>
                <span className={styles.icon}>family_restroom</span>
                <h2 className={styles.title}>Personal Life and Values</h2>
                <p className={styles.body}>
                    Today, I live in Germany with my wonderful wife and our two little children. Balancing family life and a career in game development has taught me the value of patience, adaptability, and persistence—qualities that resonate in my approach to both coding and parenting.
                </p>
            </div>

            <div className={styles.content}>
                <span className={styles.icon}>code</span>
                <h2 className={styles.title}>My Passion for Programming</h2>
                <p className={styles.body}>
                    For me, programming is more than just a profession; it’s a craft. I take pride in designing systems that are both efficient and scalable, believing that clean, reusable code lays the foundation for future success. Whether it’s developing an intricate game mechanic or solving a complex technical challenge, I thrive on bringing ideas to life through technology.
                </p>
            </div>
        </section >
    );
};

export default About;