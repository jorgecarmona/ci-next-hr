import React from "react";

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import PlayGround from "../pages/playground";

function App() {
  return (
    <Router>
      <Routes>
        {/* Add paths for project */}
        <Route path="/" element={<PlayGround />} />
      </Routes>
    </Router>
  );
}

export default App;
