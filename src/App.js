import logo from './logo.svg';
import './App.css';
import Homepage from './pages/Homepage';
import { Route, Routes,Redirect } from 'react-router-dom';
import LoanApplication from './pages/LoanApplication';
import { useState } from 'react';

function App() {

  const[loan,setLoan]=useState(null);
  return (
    <>
   
      
    <Routes>
        <Route path='/' element={<Homepage addLoan={setLoan}/>}/>
        <Route path='/applications' element={<LoanApplication loan={loan}/>}/>
      
      </Routes>
      
    
    </>
  );
}

export default App;
