//import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Calendar from './pages/Calendar';
import { useState } from "react";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <Router>
      <nav>
        <Link to="/"> Home </Link>
        <Link to="/Calendar"> Calendar </Link>
        <Link to="/login"> Login </Link>
      </nav>
      <Routes>
        <Route path="/" element ={<Home />} />
        <Route path="/calendar" element ={<Calendar />} />
        <Route path="/login" element ={<Login setIsAuth={setIsAuth} />} />
      </Routes></Router>
  );
}

export default App;