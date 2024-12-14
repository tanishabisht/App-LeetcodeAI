import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { LandingPage, ProblemsPage, CodingPlatformPage, NotesPage } from './pages';

function App() {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <div>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/problems" element={<ProblemsPage />} />
          <Route path="/coding/:id" element={<CodingPlatformPage />} />
          <Route path="/notes" element={<NotesPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
