import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './pages/home'
import Login from './pages/login'
import Form from './pages/form'

function App() {
  return (
    <Router>
      
      <Routes>
        <Route exact path ='/' element={<Home />} />
        <Route path ='/login' element={<Login />} />
        <Route path ='/application' element={<Form />} />
      </Routes>
    </Router>
  );
}

export default App;
