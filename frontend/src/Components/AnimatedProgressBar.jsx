import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useInView } from 'react-intersection-observer';
import styles from './AnimatedProgressBar.module.css';

const AnimatedProgressBar = ({ value }) =>
{
    const { ref, inView } = useInView({
    });

    return (
        <div ref={ref} className={styles.circularProgressbarContainer}>
            <CircularProgressbar
                value={inView ? value : 0}
                text={`${Math.round(inView ? value : 0)}%`}
                styles={buildStyles({
                    pathTransitionDuration: 2,
                    pathColor: `rgba(137, 73, 196, ${value / 100})`,
                    textColor: '#FFFF',
                    trailColor: '#8949c442',
                    backgroundColor: '#3e98c7',
                })}
            />
        </div>
    );
};

export default AnimatedProgressBar;