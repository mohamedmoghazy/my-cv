import React, { Suspense } from "react";
import "../App.css";

const App = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
      </Suspense>
    </div>
  );
};

export default App;
