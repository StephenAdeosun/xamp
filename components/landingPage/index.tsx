import React from 'react'
import HeroSection from "@/components/heroSection"
import ChooseUs from '../chooseUs'
import RealEstate from '../realEstate'
import ExploreList from '../exploreList'
import AccessPower from '../accessPower'
import Footer from '../footer'
import Navbar from '../navbar'

function index() {
  return (
    <div>
        <Navbar/>
        <HeroSection/>
        <ChooseUs/>
        <RealEstate/>
        <ExploreList/>
        <AccessPower/>
        <Footer/>
    </div>

  )
}

export default index