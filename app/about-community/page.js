import React from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import AboutCommunityMain from '../components/about-community/AboutCommunityMain'

const AboutCommunity = () => {
  return (
    <main className='bg-img'>
      <Header />
        <AboutCommunityMain />
      <Footer />
      
    </main>
  )
}

export default AboutCommunity