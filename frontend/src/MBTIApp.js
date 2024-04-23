import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./componentMBTI/header";
function MBTIApp() {
  return (
    <Routes>
      <Route path='/*' element={<Header />} />
    </Routes>
  );
}

export default MBTIApp;
