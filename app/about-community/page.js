import React from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import AboutCommunityMain from '../components/about-community/AboutCommunityMain'


export const metadata = {
  title: "Learn about Our Dynamic Community of Creatives",
  description: "Join Kreatr's community of creative minds and designers passionate about making a positive impact. Learn more about us today!"
};

const AboutCommunity = () => {
  return (
    <main className='pt-[6.25rem] bg-img'>
      <Header />
        <AboutCommunityMain />
      <Footer />
      
    </main>
  )
}

export default AboutCommunity;