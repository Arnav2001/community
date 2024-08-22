import React from 'react'
import BlogListingHero from '../components/blog-listing-hero/BlogListingHero'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'


export const metadata = {
  title: "Read Our Blogs | Latest Design Trends",
  description: "Explore our blogs for the latest design trends, insightful articles, and more. Stay informed and inspired with our engaging content!"
};

const BlogListing = () => {
  return (
    <main className='pt-[6.25rem] bg-img'>
      <Header />
        <BlogListingHero />
      <Footer />
      
    </main>
  )
}

export default BlogListing