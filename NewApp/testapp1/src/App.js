//import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Calendar from './pages/Calendar';
import { useState } from "react";
import {signOut} from "firebase/auth";
import {auth} from "./firebase-config"

function App() {
  const [isAuth, setIsAuth] = useState(false);

  const signOutUser = () => {
    signOut(auth).then(() => {
      localStorage.clear()
      setIsAuth(false)
      window.location.pathname = "/login";
    });
  };

  return (
    <Router>
      <nav>
        <Link to="/"> Home </Link>
        <Link to="/Calendar"> Calendar </Link>
        {!isAuth ? <Link to="/login"> Login </Link> : <button> Log Out </button>}
      </nav>
      <Routes>
        <Route path="/" element ={<Home />} />
        <Route path="/calendar" element ={<Calendar />} />
        <Route path="/login" element ={<Login setIsAuth={setIsAuth} />} />
      </Routes></Router>
  );
}

export default App;
