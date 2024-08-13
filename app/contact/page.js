import React from 'react'
import Header from '../components/header/Header'
import ContactHero from '../components/contact-hero/ContactHero'
import Footer from '../components/footer/Footer'


const ContactPage = () => {
  return (
    <main className='pt-[6.25rem] bg-img'>
      <Header />
      <ContactHero />
      <Footer />
    </main>
  )
}

export default ContactPage;