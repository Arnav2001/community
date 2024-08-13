import React from 'react'
import AboutKreatrHeader from './about-kreatr-header/AboutKreatrHeader'
import AboutKreatrMiddle from './about-kreatr-middle/AboutKreatrMiddle'
import AboutKreatrBottom from './about-kreatr-bottom/AboutKreatrBottom'

const AboutKreatrMain = () => {
  return (
    <section>
      <div>
        <div>
            <AboutKreatrHeader />
            <AboutKreatrMiddle />
            <AboutKreatrBottom />
        </div>
      </div>
    </section>
  )
}

export default AboutKreatrMain