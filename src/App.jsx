import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home'
import About from './Pages/About'
import Blog from './Pages/Blog'
import Contacts from './Pages/Contacts/Contacts'
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <Footer />

    </div>
  );
}


export default App;
