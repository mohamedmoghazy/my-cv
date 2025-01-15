import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import curvedImageSrc from "../assets/HeroImage.jpg";
import styles from "./HeroImageSVG.module.css";
import CodeBackground from "./CodeBackground";

const pathVariants = {
    initial: {
        d: "M612.904 270.907C574.691 227.962 524.191 236.463 451.04 80.7729C377.888 -74.9177 104.808 77.4227 19.2481 249.436C-27.8287 344.081 88.0301 426.575 89.0103 515.701C89.1183 598.366 178.45 618.704 252.055 635.461L253.711 635.838C327.625 652.67 411.352 670.208 524.192 600.748C637.031 531.288 651.117 313.851 612.904 270.907Z"
    },
    animate: {
        d: [
            "M612.904 270.907C574.691 227.962 524.191 236.463 451.04 80.7729C377.888 -74.9177 104.808 77.4227 19.2481 249.436C-27.8287 344.081 88.0301 426.575 89.0103 515.701C89.1183 598.366 178.45 618.704 252.055 635.461L253.711 635.838C327.625 652.67 411.352 670.208 524.192 600.748C637.031 531.288 651.117 313.851 612.904 270.907Z",
        ],
        transition: {
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
        }
    }
};

const HeroImageSVG = () =>
{
    return (
        <div className={styles.root}>
            <svg className={styles.morphShape} viewBox="0 0 551 651" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <clipPath id="clip">
                        <motion.path
                            variants={pathVariants}
                            initial="initial"
                            animate="animate"
                        />
                    </clipPath>
                </defs>
            </svg>

            <div className={styles.heroImageContainer}>
                <img src={curvedImageSrc} alt="Curved Image" className={styles.hero_image} style={{ clipPath: "url(#clip)" }} />

                <CodeBackground position="bottom-left" />
                <CodeBackground position="top-right" />
            </div>

        </div>
    );
};

export default HeroImageSVG;