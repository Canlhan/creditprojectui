import logo from './logo.svg';
import './App.css';
import Homepage from './pages/Homepage';
import { Route, Routes,Redirect } from 'react-router-dom';
import LoanApplication from './pages/LoanApplication';

function App() {
  return (
    <>
    
      
    <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/applications' element={<LoanApplication/>}/>
      
      </Routes>
      
    
    </>
  );
}

export default App;
