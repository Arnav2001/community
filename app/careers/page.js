import React from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import { CareersHero } from '../components/careers-hero/Careers'

export const metadata = {
  title: "Discover Your Dream Job at Kreatr | Bangalore",
  description: "  Discover endless opportunities for your career at kreatr! Join our vibrant community of talented creatives and unlock your full potential. Explore now!"
};
const CareersPage = () => {
  return (
    <main className='pt-[6.25rem] bg-img'>
      <Header />
        <CareersHero />
      <Footer />
      
    </main>
  )
}

export default CareersPage;