import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Feesten from './pages/Feesten';


function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/feesten' element={<Feesten />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;