import React from 'react'

import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import BugReportForm from '../components/bug-report/BugReportForm'


export const metadata = {
  title: "Learn about Our Dynamic Community of Creatives",
  description: "Join Kreatr's community of creative minds and designers passionate about making a positive impact. Learn more about us today!"
};
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




