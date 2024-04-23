import { useEffect, useState, useRef } from "react";
import { Link, Route, Routes } from "react-router-dom";
import CoverLetter from "./componentCL/CoverLetter";
import "./assert/cssCL/App1.css";

export default function CoverLetterApp() {
  return (
    <div className="App" style={{ backgroundColor: "#fafafa" }}>
      <Routes>
        <Route path="/" element={<CoverLetter />} />
      </Routes>
    </div>
  );
}

