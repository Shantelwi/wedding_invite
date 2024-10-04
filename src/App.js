// import React from 'react';
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import Home from './components/Home';
// import RSVPForm from './components/RSVPForm';
// import Location from './components/Location';
// import About from './components/AboutUs'
// import FAQ from './components/FAQs';
// import './App.css';
// import './index.css';


// function App() {
//   return (
//     <Router>
//       <div className='relative'>
//         <nav className=' text-cursive p-5 flex justify-evenly items-center '>
//           <div>
//             <Link to="/" className='nav-link text-2xl'>Home</Link>
//           </div>
//           <div>
//             <Link to="/rsvp" className='nav-link text-2xl'>RSVP</Link>
//           </div>
//           <div>
//             <Link to="/location" className='nav-link text-2xl'>Travel</Link>
//           </div>
//           <div>
//             <Link to="/about" className='nav-link text-2xl'>Our Story</Link>
//           </div>
//           <div>
//             <Link to="/faq" className='nav-link text-2xl'>FAQ's</Link>
//           </div>
//         </nav>
//       </div>
//       <hr></hr>
//       <Routes>
//         <Route path='/' element={<Home />} />
//         <Route path='/rsvp' element={<RSVPForm />} />
//         <Route path='/location' element={<Location />} />
//         <Route path='/about' element={<About />} />
//         <Route path='/faq' element={<FAQ />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;


import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import RSVPForm from './components/RSVPForm';
import Location from './components/Location';
import About from './components/AboutUs';
import FAQ from './components/FAQs';
import './App.css';
import './index.css';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Router>
      <div className='relative'>
        <nav className='text-cursive p-5 flex justify-between items-center'>
          <div className='text-2xl md:hidden'>R+S</div> {/* Logo only on small screens */}
          <div className='hidden md:flex md:justify-evenly md:items-center'>
            {/* Navigation links for desktop */}
            <Link to="/" className='nav-link text-2xl'>Home</Link>
            <Link to="/rsvp" className='nav-link text-2xl'>RSVP</Link>
            <Link to="/location" className='nav-link text-2xl'>Travel</Link>
            <Link to="/about" className='nav-link text-2xl'>Our Story</Link>
            <Link to="/faq" className='nav-link text-2xl'>FAQ's</Link>
          </div>
          <div className='md:hidden' onClick={toggleMenu}>
            {/* Hamburger Icon */}
            <div className='flex flex-col cursor-pointer'>
              <div className='bg-black h-1 w-8 mb-1'></div>
              <div className='bg-black h-1 w-8 mb-1'></div>
              <div className='bg-black h-1 w-8'></div>
            </div>
          </div>
        </nav>
        {/* Mobile Menu */}
        {isOpen && (
          <div className='flex-col md:hidden'>
            <Link to="/" className='nav-link text-2xl'>Home</Link>
            <Link to="/rsvp" className='nav-link text-2xl'>RSVP</Link>
            <Link to="/location" className='nav-link text-2xl'>Travel</Link>
            <Link to="/about" className='nav-link text-2xl'>Our Story</Link>
            <Link to="/faq" className='nav-link text-2xl'>FAQ's</Link>
          </div>
        )}
      </div>
      <hr />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/rsvp' element={<RSVPForm />} />
        <Route path='/location' element={<Location />} />
        <Route path='/about' element={<About />} />
        <Route path='/faq' element={<FAQ />} />
      </Routes>
    </Router>
  );
}

export default App;




