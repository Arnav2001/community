import React from 'react'
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import CollabrationHero from '../components/collabration-hero/CollabrationHero';

export const metadata = {
  title: "Partner With Us | Kreatr ",
  description: " Looking to collaborate? Partner with us as a speaker, space provider, seller, or sponsor. Reach out to us for more information."
};
const CollabrationPage = () => {
  return (
    <main className='pt-[6.25rem] bg-img'>
      <Header />
      <CollabrationHero />
      <Footer />
    </main>
  )
}

export default CollabrationPage;