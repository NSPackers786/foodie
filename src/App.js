import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FoodPlaces from './components/FoodPlaces';
 
const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
        
      <FoodPlaces/>

      <Contact />
      <Footer />
 
    </div>
  );
};

export default App;
