import React from 'react';
import Hero from './home/Hero';
import About from './home/About';
import Projects from './home/Projects';
import Contacts from './home/Contacts';
import Testimonials from './home/Testimonials';
import Services from './home/Services';
import WebsiteTypes from './home/WebsiteTypes';
import BlogsPage from '@/app/blogs/page';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 via-gray-600 to-black">
      <Hero />
      <About />
      <Projects />
      <BlogsPage />
      <WebsiteTypes />
      <Services />
      <Contacts />
      <Testimonials />
    </div>
  );
};

export default Home;
