import React, { useState, useEffect } from "react";
import styles from "./TypingAnimation.module.css";

const textArray = [
    "Game Developer 🎮",
    "AR/VR Specialist 🌐",
    "Full-Stack Developer 📱",
    "Proficient in Unity3D, C#,",
    "JS, React, Mysql, MongoDB..."
];

const TypingAnimation = () =>
{
    const [text, setText] = useState("");
    const [index, setIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() =>
    {
        const currentText = textArray[index];

        const typingSpeed = isDeleting ? 50 : 100;
        const pauseTime = isDeleting ? 500 : 1500;

        let timeout;

        if (!isDeleting && charIndex < currentText.length)
        {
            timeout = setTimeout(() =>
            {
                setText((prev) => prev + currentText[charIndex]);
                setCharIndex((prev) => prev + 1);
            }, typingSpeed);
        } else if (isDeleting && charIndex > 0)
        {
            timeout = setTimeout(() =>
            {
                setText((prev) => prev.slice(0, -1));
                setCharIndex((prev) => prev - 1);
            }, typingSpeed);
        } else
        {
            timeout = setTimeout(() =>
            {
                setIsDeleting(!isDeleting);
                if (!isDeleting)
                {
                    setCharIndex(currentText.length);
                } else
                {
                    setIndex((prev) => (prev + 1) % textArray.length);
                    setCharIndex(0);
                }
            }, pauseTime);
        }

        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, index]);

    return (
        <div className={styles.codeTag}>
            <p className={styles.code}>{`<code>`} </p>
            <p class={styles.text}>{text} <span className={styles.cursor}>|</span></p>
            <p className={styles.code}>{`</code>`}</p>
        </div>
    );
};

export default TypingAnimation;