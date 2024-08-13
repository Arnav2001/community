import React from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import PaymentSuccessMain from '../components/payment-success/PaymentSuccessMain'

const PaymentSuccess = () => {
  return (
    <main className='pt-[6.25rem] bg-img'>
        <Header />
            <PaymentSuccessMain />
        <Footer />
    </main>
  )
}

export default PaymentSuccess;
