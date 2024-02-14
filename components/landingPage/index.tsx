import React from 'react'
import HeroSection from "@/components/landingPage/heroSection"
import ChooseUs from './chooseUs'
import RealEstate from './realEstate'
import ExploreList from './exploreList'
import AccessPower from './accessPower'
import Footer from '../commons/footer'
import Navbar from '../commons/navbar'
import Discover from './discover'

function index() {
  return (
    <div>
        <Navbar/>
        <HeroSection/>
        <ChooseUs/>
        <RealEstate/>
        <ExploreList/>
        {/* <Discover/> */}
        <AccessPower/>
        <Footer/>
    </div>

  )
}

export default index