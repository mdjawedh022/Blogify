import React from 'react'
import Hero from '../components/Hero'
import Categories from '../components/Categories'
import FeaturedBlogs from '../components/FeaturedBlogs'
import Newsletter from '../components/Newsletter'
import Testimonials from '../components/Testimonials'
import StatsSection from '../components/StatsSection'

const Home = () => {
  return (
    <>
      <Hero />
      <FeaturedBlogs />
      <Newsletter />
      <Categories />
      <StatsSection/>
      <Testimonials />
     
    </>
  );
}

export default Home
