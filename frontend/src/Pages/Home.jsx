import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Testimonials from '../components/Testimonials'
import Features from '../components/Features'
import FeedBackForm from '../components/feedBackForm'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className='blue__gradient2'>
      <Navbar />
      <Hero/>
      <div className='w-full mx-auto my-24 '>
      <Testimonials/>
      </div>
      <div className='w-full mx-auto my-24 '>

      <Features/>
      </div>
      <div className='w-full mx-auto my-24 '>
      <FeedBackForm/>

      </div>
      <Footer/>
    </div>
  )
}

export default Home