import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';
import Contact from './pages/Contact/Contact';
import Header from './components/Header/Navigation/Nav';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path = '/' element={<Home />} />
          <Route exact path = '/projects' element={<Projects />} />
          <Route exact path = '/contact' element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
