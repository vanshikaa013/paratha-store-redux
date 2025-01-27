import React from 'react'
import Navbar from '../components/Navbar'
import Herosec from '../components/Herosec'
import OurServices from '../components/OurServices'
import Menu from '../components/menu'
import Footer from '../components/Footer'
import Review from '../components/Review'

const Home = () => {
  return (
  <>
   
   <Herosec/>
   <OurServices/>
   <Menu/>
   <Review/>
   {/* <Footer/> */}
   </>
  )
}

export default Home