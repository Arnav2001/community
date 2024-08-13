import React from 'react'
import CollabrationHeader from './collabration-header/CollabrationHeader'
import CollabrationSection from './collabration-section/CollabrationSection'

const CollabrationHero = () => {
  return (
    <section>
      <div className="container mx-auto  ">
        <div>
            <CollabrationHeader />
            <CollabrationSection />
        </div>
      </div>
    </section>
  )
}

export default CollabrationHero;