import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/header";
import HeaderContest from "./components/contest/headerContest";
import MBTI from "./components/mbti/mbtigroup";
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/mbti/*' element={<Header />} />
        <Route path='/mbti/contest' element={<HeaderContest />} />
        <Route path='/mbti/mbti' element={<MBTI />} />
      </Routes>
    </Router>
  );
}

export default App;
