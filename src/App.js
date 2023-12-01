import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import RSVPForm from './components/RSVPForm';
import Location from './components/Location';
import GiftRegistry from './components/GiftRegistry';
import './App.css';


function App() {
  return (
    <Router>
      <div className='relative'>
        <nav className=' text-cursive p-5 flex justify-evenly items-center '>
          <div>
            <Link to="/" className='nav-link text-2xl'>Home</Link>
          </div>
          <div>
            <Link to="/rsvp" className='nav-link text-2xl'>RSVP</Link>
          </div>
          <div>
            <Link to="/location" className='nav-link text-2xl'>Location</Link>
          </div>
          <div>
            <Link to="/giftregistry" className='nav-link text-2xl'>Gift Registry</Link>
          </div>
        </nav>
      </div>
      <hr></hr>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/rsvp' element={<RSVPForm />} />
        <Route path='/location' element={<Location />} />
        <Route path='/giftregistry' element={<GiftRegistry />} />
      </Routes>
    </Router>
  );
}

export default App;
