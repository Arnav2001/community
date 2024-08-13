import React from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import { CareersHero } from '../components/careers-hero/Careers'

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