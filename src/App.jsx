import React , { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
const Dashboard = lazy(() => import('./components/Dashboard'));
const Landing = lazy(() => import('./components/Landing'));

function App() {
  
  return (
    <div>
     
       <BrowserRouter>
       <Appbar/>
      <Routes>
        <Route path="/Landing" element={<Landing />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
    </div>

  ); 
}
function Appbar(){
  const navigate = useNavigate();
  return (
    <div>
       <div style={{ }}>
        <button onClick={()=>{
          navigate("/Landing")
        }}>LandinPage</button>
        <button onClick={()=>{
          navigate("/Dashboard")
        }}>Dashboard</button>
      </div>
    </div>
  )
}
export default App;

