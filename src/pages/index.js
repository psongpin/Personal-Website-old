import React from 'react'
import Link from 'gatsby-link'
import Section from '../components/Section'
import HomeBanner from '../components/home/HomeBanner'
import About from '../components/home/About'
import Skills from '../components/home/Skills'
import Portfolio from '../components/home/Portfolio'

const IndexPage = () =>
  <div className='page-sections'>
    <Section id='home' className='home-banner-section'>
      <HomeBanner />
    </Section>

    <Section id='about-me' className='about-section'>
      <About />
    </Section>
  
    <Section id='skills' className='skills-section'>
      <Skills />
    </Section>

    <Section id='portfolio' className='portfolio-section'>
        <Portfolio />
    </Section>
  </div>

export default IndexPage
