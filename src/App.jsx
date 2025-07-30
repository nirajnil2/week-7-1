import React , { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
const Dashboard = lazy(() => import('./components/Dashboard'));
const Landing = lazy(() => import('./components/Landing'));
import { Countcontext } from './context';
import { useContext , useState } from 'react';

function App() {
  
 /*  return (
    <div>
       <BrowserRouter>
       <Appbar/>
      <Routes>
       <Route path="/landing" element={
  <Suspense fallback={"Loading..."}>
    <Landing />
  </Suspense>
} />
        <Route path="/dashboard" element={
  <Suspense fallback={"Loading..."}>
    <Dashboard/>
  </Suspense>
} />
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
  )} */

    const [count , setcount] = useState(0);
    
    return (
      <div>
       <Countcontext.Provider value={count} >
        <Count  count={count} setcount={setcount} />
        </Countcontext.Provider>
      </div>
    )
}
function Count({setcount}){
  return (
    <div>
      <Countrenderer/>
      <Button setcount={setcount} />
    </div>
  )
}
function Countrenderer(){
  const count = useContext(Countcontext);
  return (
    <div>
      count : {count}
    </div>
  )
}
function Button({setcount}){
  const count = useContext(Countcontext);
  return (
    <div>
      <button onClick={ ()=>{
        setcount(count+1) ;
      }}   > Increase

      </button>
      <button onClick={ ()=>{
        setcount(count-1) ;
      }}   > Decrease 

      </button>

    </div>
  )
}
export default App;

