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
                        {/* Hero title overlay for all projects */}
                        <div className={styles.heroText}>
                            <h1 className={styles.heroTitle}>{project.title}</h1>
                        </div>
                    </div>
                )}

                {/* Title now always overlaid on hero, no duplicate needed */}
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

                                // Force dark gray inline role text (My Roles, Co-Founder line) to white
                                // Replace inline style color rgb(47, 46, 46) with pure white for readability
                                html = html.replace(/style=("|')[^"']*color:rgb\(47,\s*46,\s*46\)[^"']*("|')/gi, (m) => m.replace(/color:rgb\(47,\s*46,\s*46\)/i, 'color:#ffffff'));
                                // Also replace spans that only wrap bold role label using that color
                                html = html.replace(/<span[^>]*style="[^"]*color:rgb\(47,\s*46,\s*46\)[^"]*"/gi, (m) => m.replace(/color:rgb\(47,\s*46,\s*46\)/i, 'color:#ffffff'));
                                // Replace black text color:#000000 (used in HOVR and other projects) with white
                                html = html.replace(/color:#000000;?/gi, 'color:#ffffff;');
                                html = html.replace(/color:\s*rgb\(0,\s*0,\s*0\)/gi, 'color:#ffffff');

                                // Remove empty paragraphs (&nbsp; or just whitespace) to tighten vertical gaps
                                html = html.replace(/<p[^>]*>(?:\s|&nbsp;)*<\/p>/gi, '');
                                // Remove paragraphs that only contain wixGuard placeholder spans (invisible content creating large gaps)
                                html = html.replace(/<p[^>]*>(?:\s*(?:<span[^>]*class=("|')[^"']*wixGuard[^"']*("|')[^>]*>\s*<\/span>)+\s*)<\/p>/gi, '');
                                // Remove nested wrapper spans with color + wixGuard but no real text
                                html = html.replace(/<p[^>]*>(?:\s*<span[^>]*>(?:\s*<span[^>]*class=("|')[^"']*wixGuard[^"']*("|')[^>]*>\s*<\/span>\s*)+<\/span>\s*)<\/p>/gi, '');
                                // Generic cleanup: paragraphs containing wixGuard and no alphanumeric characters
                                html = html.replace(/<p[^>]*>(?:(?:[^A-Za-z0-9<]*<span[^>]*class=("|')[^"']*wixGuard[^"']*("|')[^>]*>[^<]*<\/span>)+[^A-Za-z0-9<]*)<\/p>/gi, '');

                                // Collapse any residual multiple blank lines produced by removals
                                html = html.replace(/(<p[^>]*>\s*<\/p>\s*){2,}/gi, '');
                                // Collapse consecutive removed paragraph boundaries leaving behind <br> sequences after tasks list
                                html = html.replace(/(<br\s*\/?>(?:\s|&nbsp;)*){2,}/gi, '<br />');
                                // Collapse multiple consecutive <br> tags to a single one
                                html = html.replace(/(<br\s*\/?>{1,2}){2,}/gi, '<br />');
                                // Trim superfluous whitespace between block elements
                                html = html.replace(/\n{2,}/g, '\n');

                                // If HOVR project: replace old YouTube video ID with the requested new one
                                if (project.slug === 'hovr')
                                {
                                    html = html.replace(/CGfD-KTwDJw/g, 'GlnF5FAE3mo');
                                    // Remove the duplicate gallery slideshow section (image 14232491_1138607346234249...)
                                    html = html.replace(/<div[^>]*id="comp-ist8zlyo"[^>]*data-testid="slide-show-gallery"[\s\S]*?<\/div><!--\/\$-->/gi, '');
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

                                // Fix POLYBLAST: remove store links and duplicate gallery
                                if (project.slug === 'polyblast')
                                {
                                    // Remove the entire slide-show gallery section with duplicate images
                                    html = html.replace(/<div[^>]*id="comp-ist85sj0"[^>]*data-testid="slide-show-gallery"[\s\S]*?<\/div><!--\/\$-->/gi, '');
                                    // Remove Google Play store image/button
                                    html = html.replace(/<div[^>]*id="comp-ist85sj7"[\s\S]*?<\/div><!--\/\$-->/gi, '');
                                    // Remove Apple App Store image/button
                                    html = html.replace(/<div[^>]*id="comp-ist85sj5"[\s\S]*?<\/div><!--\/\$-->/gi, '');
                                }

                                // Fix HBAZBOZ VS ZOMBIES: remove wrong content and fix video
                                if (project.slug === 'hbazboz-vs-zombies')
                                {
                                    // Remove the gallery with wrong images
                                    html = html.replace(/<div[^>]*id="comp-ist85sj0"[^>]*data-testid="slide-show-gallery"[\s\S]*?<\/div><!--\/\$-->/gi, '');
                                    // Remove the wrong title "POLYBLAST" 
                                    html = html.replace(/<div[^>]*id="comp-ist85six"[\s\S]*?<\/div><!--\/\$-->/gi, '');
                                    // Remove the wrong description
                                    html = html.replace(/<div[^>]*id="comp-ist85siz"[\s\S]*?<\/div><!--\/\$-->/gi, '');
                                    // Remove Google Play and App Store buttons
                                    html = html.replace(/<div[^>]*id="comp-ist85sj7"[\s\S]*?<\/div><!--\/\$-->/gi, '');
                                    html = html.replace(/<div[^>]*id="comp-ist85sj5"[\s\S]*?<\/div><!--\/\$-->/gi, '');
                                    // Replace wrong YouTube video IDs with the correct one
                                    html = html.replace(/F7feEv_BJZk/g, 'IkMmx5erdmY');
                                    html = html.replace(/P7KQ-nAPmmM/g, 'IkMmx5erdmY');
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
