import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Mainsection from './components/Mainsection';
import Footer from "./components/Footer";
function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Mainsection/>
      <Footer/>
    </div>
  )
}
export default App