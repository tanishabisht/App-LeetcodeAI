import React, { useState } from 'react';
import { Search, Filter, ArrowLeft, ChevronDown, Code2, Clock, Cpu, BookOpen } from 'lucide-react';
import { Navbar } from '../components';

const NotesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const notes = [
    {
      problemName: "Maximum Sum of Contiguous Subarray",
      approach: "Kadane's Algorithm",
      timeComplexity: "O(n)",
      spaceComplexity: "O(1)",
      logic: "Track current and global max sum. At each step, decide whether to start a new subarray or extend current one.",
      tags: ["Dynamic Programming", "Arrays"],
      difficulty: "Medium"
    },
    {
      problemName: "Two Sum",
      approach: "Hash Map",
      timeComplexity: "O(n)",
      spaceComplexity: "O(n)",
      logic: "Store complements in hash map. For each number, check if its complement exists.",
      tags: ["Hash Table", "Arrays"],
      difficulty: "Easy"
    }
  ];

  return (
    <div className="notes-container">
        
      <Navbar />

      <main className="notes-main">
        <div className="main-content">
          {/* Search and Filters */}
          <div className="search-container">
            <div className="search-wrapper">
              <div className="search-box">
                <Search className="search-icon" />
                <input
                  type="text"
                  placeholder="Search problems or approaches..."
                  className="search-input"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <button className="filter-button">
                <Filter className="filter-icon" />
                Filter
                <ChevronDown className="chevron-icon" />
              </button>
            </div>
          </div>

          {/* Notes Table */}
          <div className="table-container">
            <div className="table-wrapper">
              <table className="notes-table">
                <thead>
                  <tr className="table-header">
                    <th className="header-cell">Problem Name</th>
                    <th className="header-cell">Approach</th>
                    <th className="header-cell">
                      <div className="header-content">
                        <Clock className="header-icon" />
                        Time
                      </div>
                    </th>
                    <th className="header-cell">
                      <div className="header-content">
                        <Cpu className="header-icon" />
                        Space
                      </div>
                    </th>
                    <th className="header-cell">
                      <div className="header-content">
                        <BookOpen className="header-icon" />
                        Approach Logic
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {notes.map((note, index) => (
                    <tr key={index} className="table-row">
                      <td className="table-cell">
                        <div className="problem-info">
                          <div className="problem-name">{note.problemName}</div>
                          <div className="tag-container">
                            <span className={`difficulty-tag difficulty-${note.difficulty.toLowerCase()}`}>
                              {note.difficulty}
                            </span>
                            {note.tags.map((tag, i) => (
                              <span key={i} className="topic-tag">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </td>
                      <td className="table-cell">
                        <div className="approach-info">
                          <Code2 className="approach-icon" />
                          {note.approach}
                        </div>
                      </td>
                      <td className="table-cell complexity-cell">
                        {note.timeComplexity}
                      </td>
                      <td className="table-cell complexity-cell">
                        {note.spaceComplexity}
                      </td>
                      <td className="table-cell">
                        <p className="approach-logic">{note.logic}</p>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NotesPage;