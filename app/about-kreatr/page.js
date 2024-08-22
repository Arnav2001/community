import React from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import AboutKreatrMain from '../components/about-kreatr/AboutKreatrMain'


export const metadata = {
  title: "Kreatr | About Kreatr, Our Mission & Vision ",
  description: "Discover the vibrant community of creatives at Kreatr! Join us for cross-collaborations, inspiration, and more. Learn about our mission on our About page."
};
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



