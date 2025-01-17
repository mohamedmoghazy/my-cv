import React from 'react';
import styles from './Resume.module.css';

const Resume = () =>
{
    return (
        <section className={styles.section}>
            <div className={styles.content}>
                <h1>Resume</h1>
                <p>This is the resume page content.</p>
            </div>
        </section>
    );
};

export default Resume;