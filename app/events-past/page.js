import React from 'react'
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import PastHero from '../components/events-past/PastHero';

const EventsPast = () => {
  return (
    <main className='pt-[6.25rem] bg-img'>
      <Header />
      <PastHero />
      <Footer />
    </main>
  )
}

export default EventsPast;