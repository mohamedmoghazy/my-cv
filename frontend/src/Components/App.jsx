import React, { Suspense } from "react";
import "../App.css";
import Navbar from "./Navbar";
import Hero from "./Hero";
// import CodeBackground from "./CodeBackground";
import Resume_01 from "./Resume_01";

const App = () =>
{
  return (
    <div>
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <Hero />
      </Suspense>
    </div>
  );
};

export default App;
