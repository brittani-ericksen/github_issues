import React from 'react';
import IssueList from "./components/IssueList";
import { BrowserRouter as Router } from "react-router-dom"
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <IssueList />
      </Router>
    </div>
  );
}

export default App;
