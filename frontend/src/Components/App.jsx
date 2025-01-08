import React, { Suspense } from "react";
import "../App.css";
import Navbar from "./Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
      </Suspense>
    </div>
  );
};

export default App;
