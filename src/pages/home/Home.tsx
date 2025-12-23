import React from 'react';
import Hero from './Hero';
import About from './About';
import Projects from './Projects';
import Contacts from './Contacts';
import Testimonials from './Testimonials';
import Services from './Services';
import WebsiteTypes from './WebsiteTypes';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 via-gray-600 to-black">
      <Hero />
      <About />
      <Projects />
      <WebsiteTypes />
      <Services />
      <Contacts />
      <Testimonials />

    </div>
  );
};

export default Home;
