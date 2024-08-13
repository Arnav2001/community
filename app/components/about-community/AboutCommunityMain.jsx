import React from 'react'
import AboutCommunityHeader from './about-header/AboutCommunityHeader'
import AboutCommunityHero from './about-hero/AboutCommunityHero'

const AboutCommunityMain = () => {
  return (
    <section>
      <div>
        <div>
            <AboutCommunityHeader />
            
            <AboutCommunityHero />
        </div>
      </div>
    </section>
  )
}

export default AboutCommunityMain;