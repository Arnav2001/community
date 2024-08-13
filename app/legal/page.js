import React from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import LegalMainSection from '../components/legal-section/LegalMainSection'

const LegalPage = () => {
  return (
    <main className='pt-[6.25rem] bg-img'>
        <Header />
            <LegalMainSection />
        <Footer />
    </main>
  )
}

export default LegalPage