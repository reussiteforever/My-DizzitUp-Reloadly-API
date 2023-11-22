import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'globals.css';
// import './Navbar.css';
// import './Home.css';
// import './footer.css';

// import Navbar from '';
import Home from './app/assets/components/Home';
import NavBar from './components/navbar';
// import Footer from '';


function App() {
  return (
   <p>hello workd</p>
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
       </Routes>      
      {/* <Footer /> */}
    </Router>
  );
}

export default App;