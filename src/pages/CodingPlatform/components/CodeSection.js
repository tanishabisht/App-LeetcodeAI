import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './CodeSection.module.css';
import CodeMirror from '@uiw/react-codemirror';
import { python } from '@codemirror/lang-python';
import axios from 'axios'

const CodeSection = ({problem, code, setCode}) => {
  const { topicid, queid } = useParams();
  const [output, setOutput] = useState('Output text here...');
  const [notes, setNotes] = useState('');

  const handleRunCode = async () => {
    try {
      const response = await axios.post('https://leetcode-ai-b8e9a24e7b72.herokuapp.com/executeCode', { code });
      setOutput(response.data.output);
    } catch (error) {
      setOutput(`Error: ${error.message}`);
    }
  };

  const handleNotesChange = (e) => {
    setNotes(e.target.value);
  };

  const handleMarkComplete = async () => {
    if (problem.status == "solved") {
      alert('Problem is marked as solved!');
      return;
    }
  
    if (!notes.trim()) {
      alert('Please add a note before marking the problem as complete.');
      return;
    }
  
    try {
      // Update the `topics` database
      const topicResponse = await fetch(`http://localhost:3001/topics/${topicid}`);
      const topic = await topicResponse.json();
  
      const updatedProblems = topic.problems.map((p) => {
        if (p.id === queid) {
          return { ...p, status: 'solved' };
        }
        return p;
      });
  
      await fetch(`http://localhost:3001/topics/${topicid}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...topic, problems: updatedProblems }),
      });
  
      // Add the problem to the `notes` database
      const noteData = {
        problemName: problem.title,
        approach: problem.approaches[0]?.name || 'Unknown Approach',
        timeComplexity: problem.approaches[0]?.complexity?.time || 'N/A',
        spaceComplexity: problem.approaches[0]?.complexity?.space || 'N/A',
        logic: problem.approaches[0]?.logic || 'No logic provided',
        difficulty: problem.difficulty,
        userNote: notes,
      };
  
      await fetch('http://localhost:3001/notes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(noteData),
      });
  
      alert('Problem marked as complete and added to notes!');
    } catch (error) {
      console.error('Error marking problem as complete:', error);
      alert('There was an error marking the problem as complete. Please try again.');
    }
  };

  return (
    <div className={styles.container}>

      {/* Python Solution Card */}
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <div className={styles.headerContent}>
            <h2 className={styles.title}>Python Solution</h2>
            <button 
              className={styles.runButton}
              onClick={handleRunCode}
            >
              Run Code
            </button>
          </div>
        </div>
        <div className={styles.codeEditor}>
          <CodeMirror
            value={code}
            height="100%"
            extensions={[python()]}
            onChange={(value) => setCode(value)}
            placeholder="Write your Python code here..."
            className={styles.codeArea}
          />
        </div>
      </div>

      {/* Output Console Card */}
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <h2 className={styles.title}>Output Console</h2>
        </div>
        <div className={styles.cardContent}>
          <div className={styles.console}>
            {output}
          </div>
        </div>
      </div>

      {/* Notes Card */}
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <h2 className={styles.title}>Notes</h2>
        </div>
        <div className={styles.cardContent}>
          <textarea 
            className={styles.notesTextarea}
            placeholder="Add your notes here..."
            value={notes}
            onChange={handleNotesChange}
          />
        </div>
      </div>

      <div className={styles.card} onClick={handleMarkComplete}>
        <div className={styles.cardHeader}>
          <h2 className={styles.title}>
            {problem.status == "unsolved" ? "Mark as Complete" : "Completed!"}
          </h2>
        </div>
      </div>
      
    </div>
  );
};

export default CodeSection;
