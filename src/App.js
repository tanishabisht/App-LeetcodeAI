import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Landing, Problems, CodingPlatform, NotesPage } from './pages';

function App() {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <div>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/problems" element={<Problems />} />
          <Route path="/notes" element={<NotesPage />} />
          <Route path="/coding/:id" element={<CodingPlatform />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
