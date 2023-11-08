import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import './Navbar.css';
// import './Home.css';
// import './footer.css';

// import Navbar from '';
import Home from './components/Home';
// import Footer from '';


function App() {
  return (
   <p>hello workd</p>
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
       </Routes>      
      {/* <Footer /> */}
    </Router>
  );
}

export default App;