import React from 'react';
import styles from './SectionElement.module.css';

const SectionElement = ({ year, title, location, details }) => (
    <section className={styles.section}>
        <div className={styles.timeline}>
            <div className={styles.tileLineElement}>{year}</div>
            {/* draw line */}
            <div className={styles.line}></div>
        </div>
        <div className={styles.textContent}>
            <h3>{title}</h3>
            <h4>{location}</h4>
            <ul>
                {details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                ))}
            </ul>
        </div>
    </section>
);

export default SectionElement;