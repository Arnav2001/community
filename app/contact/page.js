import React from 'react'
import Header from '../components/header/Header'
import ContactHero from '../components/contact-hero/ContactHero'
import Footer from '../components/footer/Footer'

export const metadata = {
  title: "Connect with the Kreatr Team | Bangalore, India",
  description: " Discover the power of collaboration at Kreatr! Connect with like-minded creatives and unlock new opportunities for growth. Join our community!"
};
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