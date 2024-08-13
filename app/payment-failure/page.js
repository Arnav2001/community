import React from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import PaymentFailureMain from '../components/payment-failure/PaymentFailureMain'


const PaymentFailure = () => {
  return (
    <main className='pt-[6.25rem] bg-img'>
        <Header />
            <PaymentFailureMain />
        <Footer />
    </main>
  )
}

export default PaymentFailure;
