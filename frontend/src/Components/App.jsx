import React, { Suspense } from "react";
import "../App.css";

const App = () => {
  return (
    <div className="cv-container">
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
          Experienced Software Engineer with 12+ years in AR/VR and Game Development. Proven expertise in Unity3D, C#, and creating polished front-end features. Successfully contributed to projects like XCOM Legends and STÆDIUM. Strong collaborator with backend teams and an advocate for optimized workflows.
        </p>
      </section>

      <section className="cv-section">
        <h3>Skills</h3>
        <ul>
          <li>Programming Languages: C#, C++, JavaScript, React</li>
          <li>Development Tools: Git, Jenkins, JIRA, Visual Studio, Eclipse</li>
          <li>Game Development: Unity3D, AR/VR, Agile Development, Multiplayer Systems</li>
          <li>General Skills: OOP, SOLID Principles, Data Structures & Algorithms, Design Patterns, Problem-Solving</li>
        </ul>
      </section>

      <section className="cv-section">
        <h3>Work Experience</h3>
        <div>
          <h4>Senior Software Engineer (Unity3D), Freeletics</h4>
          <p>Munich, Germany | 2022 - 2023</p>
          <ul>
            <li>Contributed to the STÆDIUM platform, focusing on enhancing user experience and integrating new features.</li>
            <li>Collaborated with cross-functional teams to deliver high-quality, scalable solutions.</li>
            <li>Optimized performance, reducing loading times by 20%.</li>
          </ul>
        </div>
        <div>
          <h4>Unity Developer, Chimera Entertainment</h4>
          <p>Munich, Germany | 2020 - 2022</p>
          <ul>
            <li>Developed and optimized 10+ meta features for XCOM Legends, including research systems, improving user engagement by 20%.</li>
            <li>Created custom tools to streamline level design workflows, reducing development time by 30%.</li>
            <li>Collaborated with backend developers to deliver polished front-end features.</li>
          </ul>
        </div>
      </section>

      <section className="cv-section">
        <h3>Education</h3>
        <ul>
          <li>Full-Stack Web Development Bootcamp, WBS Coding School, Berlin (May 2024 – Sep 2024)</li>
          <li>TELC Deutsch B1+ Beruf Certificate, Wifa Siegburg (Nov 2023)</li>
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
            XCOM Legends: Developed front-end systems and tools for this AAA mobile game, focusing on user experience and collaboration with backend teams. <a href="https://chimera-entertainment.com/xcom/" target="_blank" rel="noopener noreferrer">Learn More</a>
          </li>
          <li>
            STÆDIUM by Freeletics: Contributed to this innovative fitness gaming platform, ensuring seamless interaction and immersive features. <a href="https://www.staedium.com/" target="_blank" rel="noopener noreferrer">Learn More</a>
          </li>
        </ul>
      </section>

      <section className="cv-section">
        <h3>Keywords</h3>
        <p>
          Unity3D, AR/VR, C#, Game Development, Agile, Front-End Development, Multiplayer Systems, Git, Jenkins, Design Patterns, OOP, SOLID Principles, Data Structures, Algorithms
        </p>
      </section>
    </div>
  );
};

export default App;