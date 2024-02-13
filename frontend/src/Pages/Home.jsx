import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Testimonials from '../components/Testimonials'
import Features from '../components/Features'
import FeedBackForm from '../components/feedBackForm'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero/>
      <Testimonials/>
      <Features/>
      <FeedBackForm/>
      <Footer/>
    </div>
  )
}

export default Home