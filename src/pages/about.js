import React from 'react'

import InnerPageTemplate from '../templates/InnerPage'
import AboutMain from '../components/about/AboutMain'
import TechSkills from '../components/about/TechSkills'

const AboutPage = () =>
  <div className='about-page'>
    <InnerPageTemplate title='About'>
      <AboutContent />
    </InnerPageTemplate>
  </div>

const AboutContent = () =>
  <div className='about-content'>
    <AboutMain />
    <TechSkills />
  </div>

export default AboutPage
