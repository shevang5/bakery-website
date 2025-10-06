import React from 'react'
// import Navbar from '../components/Navbar'
import HeroPage from '../components/HeroPage'
import MainPage from '../components/MainPage'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      {/* <Navbar/> */}
      <HeroPage />
      <MainPage className="main" /> {/* Make sure to pass className */}
      <Footer />
    </div>
  )
}

export default Home
