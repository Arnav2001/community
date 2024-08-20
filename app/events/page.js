import React from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import EventsListing from '../components/events-listing/EventsListing'

export const metadata = {
  title: "Stay Updated: Kreatr Event Calendar",
  description: " Join us at Kreatr for engaging design thinking workshops, interview masterclasses, and more. Unleash your creativity and innovation with us today!"
};

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