import React from 'react'
import BlogListingHero from '../components/blog-listing-hero/BlogListingHero'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'

const BlogListing = () => {
  return (
    <main className='bg-img'>
      <Header />
        <BlogListingHero />
      <Footer />
      
    </main>
  )
}

export default BlogListing