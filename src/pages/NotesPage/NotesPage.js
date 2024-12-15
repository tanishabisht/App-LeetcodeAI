// NotesPage.js

import React, { useState, useEffect } from 'react';
import { Search, Filter, ChevronDown, Code2, Clock, Cpu, BookOpen } from 'lucide-react';
import styles from './NotesPage.module.css';
import { Navbar } from '../../components';

const NotesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await fetch(`http://localhost:3001/notes`);
        const _notes = await response.json();
        setNotes(_notes)
      } catch (error) {
        console.error('Error fetching problem data:', error);
      }
    };
    fetchNotes();
  }, []);

  const getDifficultyClass = (difficulty) => {
    const baseClass = styles.badge;
    switch(difficulty) {
      case 'Easy':
        return `${baseClass} ${styles.badgeEasy}`;
      case 'Medium':
        return `${baseClass} ${styles.badgeMedium}`;
      case 'Hard':
        return `${baseClass} ${styles.badgeHard}`;
      default:
        return baseClass;
    }
  };

  return (
    <div className={styles.container}>
      <Navbar />

      <main className={styles.main}>
        <div className={styles.content}>
          {/* Search and Filters */}
          {/* <div className={styles.searchContainer}>
            <div className={styles.searchWrapper}>
              <div className={styles.searchInputWrapper}>
                <Search className={styles.searchIcon} />
                <input
                  type="text"
                  placeholder="Search problems or approaches..."
                  className={styles.searchInput}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </div> */}

          {/* Notes Table */}
          <div className={styles.tableContainer}>
            <div className={styles.tableWrapper}>
              <table className={styles.table}>
                <thead>
                  <tr className={styles.tableHeader}>
                    <th className={styles.tableHeaderCell}>
                      Problem Name
                    </th>
                    <th className={styles.tableHeaderCell}>
                      Difficulty
                    </th>
                    <th className={styles.tableHeaderCell}>
                      Approach
                    </th>
                    <th className={styles.tableHeaderCell}>
                      <div className={styles.headerWithIcon}>
                        <Clock className={styles.headerIcon} />
                        Time
                      </div>
                    </th>
                    <th className={styles.tableHeaderCell}>
                      <div className={styles.headerWithIcon}>
                        <Cpu className={styles.headerIcon} />
                        Space
                      </div>
                    </th>
                    <th className={styles.tableHeaderCell}>
                      <div className={styles.headerWithIcon}>
                        <BookOpen className={styles.headerIcon} />
                        Approach Logic
                      </div>
                    </th>
                    <th className={styles.tableHeaderCell}>
                      <div className={styles.headerWithIcon}>
                        <BookOpen className={styles.headerIcon} />
                        User Note
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {notes.map((note, index) => (
                    <tr key={index} className={styles.tableRow}>
                      <td className={styles.tableCell}>
                        <div className={styles.problemInfo}>
                          <div className={styles.problemName}>{note.problemName}</div>
                        </div>
                      </td>
                      <td className={styles.tableCell}>
                        <div className={styles.tagContainer}>
                            <span className={getDifficultyClass(note.difficulty)}>
                              {note.difficulty}
                            </span>
                          </div>
                      </td>
                      <td className={styles.tableCell}>
                        <div className={styles.approachWrapper}>
                          <Code2 className={styles.approachIcon} />
                          {note.approach}
                        </div>
                      </td>
                      <td className={styles.complexityCell}>
                        {note.timeComplexity}
                      </td>
                      <td className={styles.complexityCell}>
                        {note.spaceComplexity}
                      </td>
                      <td className={styles.tableCell}>
                        <p className={styles.logicText}>{note.logic}</p>
                      </td>
                      <td className={styles.tableCell}>
                        <p className={styles.logicText}>{note.userNote}</p>
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