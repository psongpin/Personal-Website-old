import React from 'react'
import Link from 'gatsby-link'
import Section from '../components/Section'
import HomeBanner from '../components/HomeBanner'
import About from '../components/About'
import Skills from '../components/Skills'
import Portfolio from '../components/Portfolio'
import Contact from '../components/Contact'

import { Element } from 'react-scroll'

const IndexPage = () =>
  <div className='page-sections'>
    <Section id="home" className="home-banner-section">
      <Element name="home">
        <HomeBanner />
      </Element>
    </Section>
    
    <Section id="about-me" className="about-section">
      <Element name="about">
        <About />
      </Element>
    </Section>
    
    <Section id="skills" className="skills-section">
      <Skills />
    </Section>
    
    <Section id="portfolio" className="portfolio-section">
      <Element name="portfolio">
        <Portfolio />
      </Element>
    </Section>
    
    <Section id="contact" className="contact-section">
      <Element name="contact">
        <Contact />
      </Element>
    </Section>
  </div>

export default IndexPage
