import React from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import JoinKlan from '../components/join-klan/JoinKlan'


export const metadata = {
  title: "Join Our Klan | Connect with Like-Minded Individuals",
  description: " Looking to connect with like-minded individuals? Join our klan today and be a part of a community that understands your creative needs."
};

const JoinOurKlanPage = () => {
  return (
    <main className='pt-[6.25rem] bg-img'>
        <Header />
        <JoinKlan />
        <Footer />
    </main>
  )
}

export default JoinOurKlanPage