import React from 'react';
import styles from './About.module.css';

const About = () =>
{
    return (
        <section className={styles.section}>
            <div className={styles.content}>
                <h1>About Me</h1>
                <p>
                    From a young age, I was captivated by the world of gaming. Growing up, I spent countless hours exploring virtual realms, fascinated by how games worked and what made them so immersive. This passion sparked my interest in programming, leading me to pursue a bachelor’s degree in Computer Science. During my studies, I developed a deep love for writing well-organized, reusable code—turning creative ideas into tangible, interactive experiences.
                </p>
                <p>
                    Over the past decade, I’ve built a rewarding career as a Unity3D developer, specializing in game development, augmented reality (AR), and virtual reality (VR). I’ve had the privilege of contributing to notable projects like XCOM Legends and STÆDIUM, where I balanced technical innovation with creative problem-solving. My expertise spans C#, JavaScript, UI/UX design, and optimizing workflows to ensure peak performance. Along the way, I’ve mentored and trained engineers, sharing my knowledge and fostering a collaborative spirit within my teams.
                </p>
                <p>
                    Today, I live in Germany with my wonderful wife and our two little children. Balancing family life and a career in game development has taught me the value of patience, adaptability, and persistence—qualities that resonate in my approach to both coding and parenting.
                </p>
                <p>
                    For me, programming is more than just a profession; it’s a craft. I take pride in designing systems that are both efficient and scalable, believing that clean, reusable code lays the foundation for future success. Whether it’s developing an intricate game mechanic or solving a complex technical challenge, I thrive on bringing ideas to life through technology.
                </p>
                <p>
                    When I’m not working or spending time with my family, you’ll often find me gaming—still chasing that sense of wonder that first drew me into this incredible industry.
                </p>
            </div>
        </section>
    );
};

export default About;