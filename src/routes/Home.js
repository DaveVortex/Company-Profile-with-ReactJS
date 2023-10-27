import React from 'react'
import Carousel from '../components/Carousel'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroVideo from '../components/HeroVideo'
import Cards from '../components/Cards'

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroVideo />
      <Carousel />
      <Cards />
      <Footer />
    </div>
  )
}