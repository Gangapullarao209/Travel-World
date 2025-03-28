import React, { useState } from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Tours from './pages/Tours';
import Login from './pages/Login';
import Register from './pages/Register';
import BookNow from './pages/BookNow';
// import Navbar from "./pages/Header";
function App() {

  const [  setLoggedInUser] = useState("");
  // const [loggedInUser, setLoggedInUser] = useState("");

  const handleLogin = (loginId) => {
      setLoggedInUser(loginId);
  }



  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
     <Route exact path='/' element = {<Home />} />
      <Route exact path='/About' element = {<About />} />
      <Route exact path='/Tours' element = {<Tours />} />
      <Route exact path='/Login' element = {<Login  onLogin={handleLogin}/>} />
      <Route exact path='/Register' element = {<Register />} />
      <Route exact path='/BookNow' element={<BookNow />} />
      
      
      
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
