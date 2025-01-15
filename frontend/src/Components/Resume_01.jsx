import React from "react";
import "./Resume_01.css";

const Resume_01 = () =>
{
  return (
    <div className="cv-container">
      {/* Left Section */}
      <div className="left-section">
        <img src="your-profile-picture.jpg" alt="Mohamed Moghazi" />

        <section className="skills">
          <h3>Skills</h3>
          <ul>
            <li>
              <span>C#</span>
              <div className="skill-bar">
                <div className="skill-bar-inner" style={{ width: "95%" }}></div>
              </div>
            </li>
            <li>
              <span>Unity3D</span>
              <div className="skill-bar">
                <div className="skill-bar-inner" style={{ width: "95%" }}></div>
              </div>
            </li>
            <li>
              <span>OOP / SOLID Principles</span>
              <div className="skill-bar">
                <div className="skill-bar-inner" style={{ width: "90%" }}></div>
              </div>
            </li>
          </ul>
        </section>

        <section className="hobbies">
          <h3>Hobbies</h3>
          <ul>
            <li>Video Games</li>
            <li>Traveling</li>
            <li>Tennis</li>
            <li>Diving</li>
            <li>Windsurfing</li>
          </ul>
        </section>
      </div>

      {/* Right Section */}
      <div className="right-section">
        <header className="cv-header">
          <h1>Mohamed Moghazi</h1>
          <h2>Senior Unity Developer | Game Development Expert</h2>
          <p>Köln/Bonn, Germany</p>
          <p>Email: eng.moghazy@gmail.com | Phone: +49 (0) 15229018095</p>
          <p>
            LinkedIn: <a href="https://www.linkedin.com/in/mohamed-moghazi-9a729554/" target="_blank" rel="noopener noreferrer">Profile</a> |
            Portfolio: <a href="https://engmoghazy.wixsite.com/moghazy" target="_blank" rel="noopener noreferrer">Website</a>
          </p>
        </header>

        <section className="cv-section">
          <h3>Professional Summary</h3>
          <p>
            Experienced Unity3D developer with over 10 years of expertise in game development, virtual reality (VR), and mixed reality (MR). Proficient in C# and JavaScript, with hands-on experience in web and app development, UI/UX design. Successfully trained and mentored over 4 engineers. Notable contributions include XCOM Legends and STÆDIUM, focusing on both technical and creative aspects of development. Adept at collaborating across teams, with a focus on optimized workflows and performance.
          </p>
        </section>

        <section className="cv-section">
          <h3>Work Experience</h3>
          <div className="timeline">
            <div className="timeline-item">
              <h4>Senior Software Engineer (Unity3D), Freeletics</h4>
              <p>Munich, Germany | 2022 - 2023</p>
              <p>Contributed to the STÆDIUM platform, focusing on enhancing user experience and integrating new features.</p>
            </div>
            <div className="timeline-item">
              <h4>Unity Developer, Chimera Entertainment</h4>
              <p>Munich, Germany | 2020 - 2022</p>
              <p>Developed and optimized meta features for XCOM Legends, improving user engagement by 20%.</p>
            </div>
            <div className="timeline-item">
              <h4>Unity Developer, Game Cooks</h4>
              <p>Lebanon | 2016 - 2017</p>
              <p>Developed immersive mobile games for Android and iOS platforms.</p>
            </div>
            <div className="timeline-item">
              <h4>Unity Developer, Appmink.TV</h4>
              <p>Australia (Remote) | 2014 - 2015</p>
              <p>Designed game features for educational apps targeted at children.</p>
            </div>
            <div className="timeline-item">
              <h4>Co-Founder & Unity Developer, Wallary GmbH</h4>
              <p>Munich, Germany | 2018 - 2020</p>
              <p>Created innovative AR experiences, collaborating with cross-functional teams to deliver solutions.</p>
            </div>
          </div>
        </section>

        <section className="cv-section">
          <h3>Education</h3>
          <ul>
            <li>Full-Stack Web Development Bootcamp, WBS Coding School, Berlin (May 2024 – Sep 2024)</li>
            <li>B.Sc. in Computer Science, 6th of October University, Egypt (2006 – 2011)</li>
          </ul>
        </section>

        <section className="cv-section">
          <h3>Languages</h3>
          <ul>
            <li>English: Fluent</li>
            <li>Arabic: Native</li>
            <li>German: Intermediate (B1)</li>
          </ul>
        </section>

        <section className="cv-section">
          <h3>Notable Projects</h3>
          <ul>
            <li>
              XCOM Legends: Developed front-end systems and tools for this ftp mobile game, focusing on user experience and collaboration with backend teams. <a href="https://chimera-entertainment.com/xcom/" target="_blank" rel="noopener noreferrer">Learn More</a>
            </li>
            <li>
              STÆDIUM by Freeletics: As a Senior Unity developer Contributed to this innovative fitness gaming platform, suporting and leading 2 other engineers ensuring seamless interaction and immersive features.<a href="https://www.staedium.com/" target="_blank" rel="noopener noreferrer">Learn More</a>
            </li>
          </ul>
        </section>

        <section className="cv-section">
          <h3>Skills</h3>
          <p>
            Unity3D, AR/VR, C#, JavaScript, Node.js, Game Development, Agile, Front-End Development, MERN Stack, Git, Jenkins, Design Patterns, OOP, SOLID Principles, Data Structures, Algorithms
          </p>
        </section>
      </div>
    </div>
  );
};

export default Resume_01;