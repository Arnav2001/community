"use client"
import React, { useState, useEffect } from 'react';
import HeaderHome from './components/header-home/HeaderHome';
import Hero from './components/hero/Hero';
import '@mantine/core/styles.css';
import Footer from './components/footer/Footer';
import HomePageLoader from './components/home-page-loader/HomePageLoader';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading time with a timeout
    setTimeout(() => {
      setLoading(false);
    }, 1500); 

    // Scroll to top when component mounts or reloads
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {loading ? (
        <HomePageLoader loading={loading} />
      ) : (
        <main className='pt-[6.25rem] bg-img md:min-h-[100vh] xl:min-h-[auto] flex flex-col overflow-x-hidden sm:justify-between'>
          <HeaderHome />
          <Hero />
          <Footer />
        </main>
      )}
    </>
  );
}

export default App;
