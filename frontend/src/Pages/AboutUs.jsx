import React from 'react';
import Navbar from '../components/Navbar';

const AboutPage = () => {
  return (
    <>  
    <Navbar/>
      <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-8">About Us</h2>

      <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="max-w-lg">
          <p className="text-lg mb-4">At HealthAware, our mission is to empower individuals to take control of their health and well-being.</p>
          <p className="text-lg mb-4">We provide innovative tools and resources to help users make informed decisions about their health, from predicting potential health issues to providing personalized diet plans.</p>
          <p className="text-lg mb-4">Our team is committed to leveraging the latest technologies, including machine learning and AI, to deliver cutting-edge solutions that improve the lives of our users.</p>
        </div>
        <div className="ml-0 md:ml-8">
          <img src="/path/to/about-image.jpg" alt="About Us" className="w-full md:max-w-xs rounded-lg shadow-md" />
        </div>
      </div>
    </div>
    </>

  );
}

export default AboutPage;
