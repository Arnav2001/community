import React from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import JoinKlan from '../components/join-klan/JoinKlan'

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