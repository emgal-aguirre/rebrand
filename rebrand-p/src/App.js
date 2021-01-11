import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './pages/Project';
import Project from './pages/Project';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Going from './components/Going';
import Index from './pages/index';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route exact path="/" component={Index} />
        <Route exact path="/project" component={Project} />
      </div>
    </Router>
  );
}

export default App;
