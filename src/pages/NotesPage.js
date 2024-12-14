import React, { useState } from 'react';
import { Search, Filter, ArrowLeft, ChevronDown, Code2, Clock, Cpu, BookOpen } from 'lucide-react';
import styles from './NotesPage.module.css';
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
    },
  ];

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
          <div className={styles.searchContainer}>
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
              <button className={styles.filterButton}>
                <Filter className={styles.filterIcon} />
                Filter
                <ChevronDown className={styles.chevronIcon} />
              </button>
            </div>
          </div>

          {/* Notes Table */}
          <div className={styles.tableContainer}>
            <div className={styles.tableWrapper}>
              <table className={styles.table}>
                <thead>
                  <tr className={styles.tableHeader}>
                    <th className={styles.tableHeaderCell}>Problem Name</th>
                    <th className={styles.tableHeaderCell}>Approach</th>
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
                  </tr>
                </thead>
                <tbody>
                  {notes.map((note, index) => (
                    <tr key={index} className={styles.tableRow}>
                      <td className={styles.tableCell}>
                        <div className={styles.problemInfo}>
                          <div className={styles.problemName}>{note.problemName}</div>
                          <div className={styles.tagContainer}>
                            <span className={getDifficultyClass(note.difficulty)}>
                              {note.difficulty}
                            </span>
                            {note.tags.map((tag, i) => (
                              <span key={i} className={`${styles.badge} ${styles.badgeTag}`}>
                                {tag}
                              </span>
                            ))}
                          </div>
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