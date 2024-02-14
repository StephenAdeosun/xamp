import React from 'react'
import Navbar from '@/components/commons/navbar'
import Hero from '@/components/faq/heroSection'
import Access from '@/components/landingPage/accessPower'
import Footer from '@/components/commons/footer'

function index() {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Access/>
        <Footer/>
    </div>
  )
}

export default index