import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Gallery from './Accordion'
import New from './Popularcourse'
import Footer from './Footer'
import Blog from './Popularcourse'
import Category from './Category'

const Home = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
      <New />
      <Category/>
      <Gallery />
      <Footer />

    </>
  )
}

export default Home
