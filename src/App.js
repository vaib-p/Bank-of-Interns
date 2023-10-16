
import './App.css';

import Home from './components/Home';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Bank from './components/bank';

function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bank" element={
          <Bank/>
        } />
        
      </Routes>
    </Router>
    
  );
}

export default App;
