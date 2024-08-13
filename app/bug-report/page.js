import React from 'react'

import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import BugReportForm from '../components/bug-report/BugReportForm'

const BugReport = () => {
  return (
    <main className='pt-[6.25rem] bg-img'>
      <Header />
        <BugReportForm />
      <Footer />
      
    </main>
  )
}

export default BugReport;




