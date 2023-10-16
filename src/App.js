
import './App.css';

import Home from './components/Home';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Bank from './components/bank';
import DepositPage from './components/DepositPage';

import WithdrawalPage from './components/WithdrawalPage';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import CreateAcc from './components/CreateAcc';



function App() {
  return (
    <>
    <Navbar/>

   
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bank" element={
          <Bank/>
        } />
        <Route path="/deposite" element={
          <DepositPage/>
        } />
         <Route path="/dashboard" element={
          <Dashboard/>
        } />
        <Route path="/withdraw" element={
          <WithdrawalPage/>
        } />
        <Route path="/createAcc" element={
          <CreateAcc/>
        } />
        
      </Routes>
    </Router>
    </>
  );
}

export default App;
