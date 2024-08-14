import React from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import AboutKreatrMain from '../components/about-kreatr/AboutKreatrMain'
import Head from 'next/head'

const AboutKreatr = () => {
  return (
    <>
    <main className='pt-[6.25rem] bg-img'>
      <Header />
       <AboutKreatrMain />
      <Footer />
      
    </main>
    </>
    
  )
}

export default AboutKreatr;



