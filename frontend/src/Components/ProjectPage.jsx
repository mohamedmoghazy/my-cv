import React from 'react';
import { useParams, Link } from 'react-router-dom';
import styles from './Projects.module.css';
import { getProjectBySlug } from './ProjectsData';

const ProjectPage = () =>
{
    const { slug } = useParams();
    const project = getProjectBySlug(slug);

    if (!project)
    {
        return (
            <section className={styles.section}>
                <div className={styles.content}>
                    <h1>Project not found</h1>
                    <p>The project you requested does not exist.</p>
                    <Link to="/projects">Back to Projects</Link>
                </div>
            </section>
        );
    }

    return (
        <section className={styles.section}>
            <div className={styles.content}>
                {/* Hero image like Wix */}
                {project.thumbnail && (
                    <div className={styles.heroWrap}>
                        {/* Support external thumbnails (http/https) and local /projects/... assets */}
                        {(() =>
                        {
                            const base = import.meta.env.BASE_URL || '/';
                            const raw = project.thumbnail;
                            const isExternal = /^https?:\/\//.test(raw);
                            const heroSrc = isExternal ? raw : `${base}${raw.replace(/^\//, '')}`;
                            return (
                                <img
                                    src={heroSrc}
                                    alt={`${project.title} hero`}
                                    className={styles.heroImage}
                                    onError={(e) =>
                                    {
                                        if (project.slug === 'wallary-app')
                                        {
                                            e.currentTarget.src = `${base}projects/wallary-app-1.png`;
                                            e.currentTarget.onerror = null;
                                        }
                                    }}
                                />
                            );
                        })()}
                    </div>
                )}

                <h1>{project.title}</h1>
                {project.description && <p>{project.description}</p>}

                {/* Render provided HTML content if present (careful with HTML source) */}
                {project.contentHtml ? (
                    <div
                        className={styles.projectContent}
                        // sanitize and rewrite scraped HTML:
                        // 1. remove Wix "BACK" buttons and links back to the Wix site
                        // 2. rewrite any "/projects/..." URLs inside the scraped HTML to include Vite base
                        dangerouslySetInnerHTML={{
                            __html: (() =>
                            {
                                const base = import.meta.env.BASE_URL || '/';
                                let html = project.contentHtml || '';

                                // Remove anchor elements that point to wixsite.com
                                html = html.replace(/<a[^>]*href=["'][^"']*wixsite\.com[^"']*["'][^>]*>[\s\S]*?<\/a>/gi, '');

                                // Remove anchor elements that have Wix button classes (e.g. wixui-button) or the text 'BACK'
                                html = html.replace(/<a[^>]*class=["'][^"']*wixui-button[^"']*["'][^>]*>[\s\S]*?<\/a>/gi, '');
                                html = html.replace(/<a[^>]*>\s*BACK\s*<\/a>/gi, '');

                                // Rewrite src and srcset that start with /projects/ to include Vite base
                                html = html.replace(/(src|srcset)=("|')\/projects\//gi, `$1=$2${base}projects/`);

                                // If HOVR project: replace old YouTube video ID with the requested new one
                                if (project.slug === 'hovr')
                                {
                                    html = html.replace(/CGfD-KTwDJw/g, 'GlnF5FAE3mo');
                                }

                                // Fix mis-scraped Wallary content: heading labelled HOVR + missing hero image asset name
                                if (project.slug === 'wallary-app')
                                {
                                    // Replace the incorrect heading text
                                    html = html.replace(/>(?:\s*)HOVR(?:\s*)</g, '>Wallary<');
                                    // Replace missing hero screenshot reference with existing local asset
                                    html = html.replace(/\/projects\/wallary-hero\.png/g, '/projects/wallary-app-1.png');
                                    // Remove duplicate bottom app store/screenshot image inside appended wallary-site section
                                    html = html.replace(/<p><img[^>]*(wallary-hero|wallary-app-1)\.png[^>]*><\/p>/i, '');
                                }

                                return html;
                            })()
                        }}
                    />
                ) : (
                    <p>No detailed content was provided for this project yet.</p>
                )}

                <div className={styles.projectExternalLinks}>
                    {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                    )}
                    {(project.youtube || project.slug === 'hovr') && (
                        <a
                            href={project.youtube || 'https://www.youtube.com/watch?v=GlnF5FAE3mo'}
                            target="_blank"
                            rel="noopener noreferrer"
                        >YouTube</a>
                    )}
                    {project.appLink && (
                        <a href={project.appLink} target="_blank" rel="noopener noreferrer">Live App</a>
                    )}
                </div>

                <div style={{ marginTop: '1.5rem' }}>
                    <Link to="/projects">← Back to Projects</Link>
                </div>
            </div>
        </section>
    );
};

export default ProjectPage;
