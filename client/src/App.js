
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { Router, Route,Switch, Routes} 
from 'react-router-dom';
import Navbar from "./Components/Layout/Navbar";
import Dashboard from "./Components/Dashboard";
import Login from "./Components/Login";
import AddTask from "./Components/AddTask";
import Task from "./Components/Task";
import Signup from "./Components/Signup";
import Edittask from "./Components/Edittask";



function App() {
  return (
    
    <div className='App'>
        
          {/* <Navbar/> */}
          
    <Routes>
    
      <Route exact path='/Dashboard' element={<Dashboard/>}/>
      <Route exact path='/AddTask' element={<AddTask/>}/>
      <Route exact path='/' element={<Login/>}/>
      <Route exact path='/Signup' element={<Signup/>}/>
       <Route exact path='edit/:id' element={<Edittask/>}/>
    </Routes>
    </div>
    
  )
};

export default App;

