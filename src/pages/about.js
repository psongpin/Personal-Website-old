import React from 'react'
import Helmet from 'react-helmet'

import InnerPageTemplate from '../templates/InnerPage'
import AboutMain from '../components/about/AboutMain'
import TechSkills from '../components/about/TechSkills'

const AboutPage = () =>
  <div className='about-page'>
    <Helmet
      title='Paul Simon Ongpin - About'
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />

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
