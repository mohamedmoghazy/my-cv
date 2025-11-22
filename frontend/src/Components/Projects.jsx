import React from 'react';
import styles from './Projects.module.css';
import projects from './ProjectsData';
import { Link } from 'react-router-dom';

const Projects = () =>
{
    return (
        <section className={styles.section}>
            <div className={styles.content}>
                <h1>Projects</h1>
                <p>Portfolio projects — click any card to view details.</p>

                <div className={styles.grid}>
                    {projects.map((p) =>
                    {
                        const base = import.meta.env.BASE_URL || '/';
                        const rawThumb = p.thumbnail || '/projects/placeholder.svg';
                        const isExternal = /^https?:\/\//.test(rawThumb);
                        const wallaryFallback = 'projects/wallary-app-1.png';
                        const thumbSrc = isExternal ? rawThumb : `${base}${rawThumb.replace(/^\//, '')}`;

                        return (
                            <Link to={`/projects/${p.slug}`} key={p.slug} className={styles.card}>
                                <div className={styles.thumbnailWrap}>
                                    <img
                                        src={thumbSrc}
                                        alt={`${p.title} thumbnail`}
                                        className={styles.thumbnail}
                                        onError={(e) =>
                                        {
                                            if (p.slug === 'wallary-app')
                                            {
                                                e.currentTarget.src = `${base}${wallaryFallback}`;
                                                e.currentTarget.onerror = null;
                                            } else
                                            {
                                                e.currentTarget.src = `${base}projects/placeholder.svg`;
                                                e.currentTarget.onerror = null;
                                            }
                                        }}
                                    />
                                </div>
                                <div className={styles.cardBody}>
                                    <h3 className={styles.cardTitle}>{p.title}</h3>
                                    <p className={styles.cardDesc}>{p.description}</p>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Projects;