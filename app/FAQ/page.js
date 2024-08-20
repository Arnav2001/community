import React from 'react'
import FAQSection from '../components/FAQ-section/FAQSection';
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'


export const metadata = {
  title: "FAQs | How to Join the Kreatr Community",
  description: "Get all the information you need from our comprehensive FAQs page—your go-to resource for answers and guidance! Contact us for more "
};

const FAQ = () => {
  return (
    <main className='pt-[6.25rem] bg-img'>
      <Header />
      <FAQSection />
      <Footer />
      
    </main>
  )
}

export default FAQ;