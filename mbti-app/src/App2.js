import { useEffect, useState, useRef } from "react";
import { Link, Route, Routes } from "react-router-dom";
import CoverLetter from "./component/CoverLetter";
import StoreCoverLetter from "./component/StoreCoverLetter";
import Preview from "./component/Preview";
import EditCoverLetter from "./component/EditCoverLetter";
import Themsmain from "./component/Themsmain";
import "./css/App1.css";

export default function App2() {
  return (
    <div className="App" style={{ backgroundColor: "#fafafa" }}>
      <Routes>
        <Route path="/" element={<CoverLetter />} />
        <Route path="/create/*" element={<Themsmain />} />
        <Route path="/Cover-Letter-list/" element={<StoreCoverLetter />} />
        <Route path="/Cover-Letter-list/Preview/:id" element={<Preview />} />
        <Route path="/Cover-Letter-list/Edit/:id" element={<EditCoverLetter />}/>
      </Routes>
    </div>
  );
}

