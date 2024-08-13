import React from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import EventsListing from '../components/events-listing/EventsListing'

const EventsPage = () => {
  return (
    <main className='pt-[6.25rem] bg-img'>
      <Header />
      <EventsListing />
      <Footer />
    </main>
  )
}

export default EventsPage