import React from "react";
import "./Resume_01.css";
import ProfileCard from "./ProfileCard";
import ResumeCard from "./ResumeCard";

const Resume = () =>
{
    return (
        <div className="container">
            <ProfileCard />
            <ResumeCard />
        </div>
    );
};

export default Resume;