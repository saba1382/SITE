import { BrowserRouter , Routes, Route , NavLink, Navigate } from 'react-router-dom'
import { useState } from 'react';
import './App.css';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Articles from './pages/Articles';

function App() {
 const [loggedIn] = useState(true)

  return(
    <div className="App">
      <BrowserRouter>
      <nav>
        <h1>My Articles</h1>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/contact'>Contact</NavLink>
      </nav>

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about/*' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/Articles/:id' element={<Articles/>} />
        <Route path='mahdi' element={loggedIn ? <p>Hello Mahdi</p> : <Navigate to='/'/>} />
        <Route path='*' element={<Navigate to='/'/>} />
      </Routes>

      </BrowserRouter>
      
    </div>
  )
}

export default App;
