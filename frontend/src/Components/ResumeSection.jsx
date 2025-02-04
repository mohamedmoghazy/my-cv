import React from 'react';
import styles from './ResumeSection.module.css';

const ResumeSection = ({ title, number, children }) => (
    <div className={styles.section}>
        <div className={styles.header}>
            <h2 className={styles.title}>{title}</h2>
            <h2 className={styles.number}>{number}</h2>
        </div>
        <div className={styles.separator} />
        <div className={styles.content}>
            {children}
        </div>
    </div >
);

export default ResumeSection;