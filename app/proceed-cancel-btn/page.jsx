import React from 'react'
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import ProceedCancelBtn from '../components/proceed-cancel/ProceedCancelBtn';

const ProceedCancel = () => {
  return (
    <main className='pt-[6.25rem] bg-img'>
        <Header />
        <ProceedCancelBtn />
        <Footer />
    </main>
  )
}

export default ProceedCancel ;