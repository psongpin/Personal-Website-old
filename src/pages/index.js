import React from 'react'
import Link from 'gatsby-link'
import Section from '../components/Section'
import HomeBanner from '../components/HomeBanner'
import About from '../components/About'
import Skills from '../components/Skills'
import Portfolio from '../components/Portfolio'
import Contact from '../components/Contact'

const IndexPage = () =>
  <div className='page-sections'>
    <Section id="home" className="home-banner-section"><HomeBanner /></Section>
    <Section id="about-me" className="about-section"><About /></Section>
    <Section id="skills" className="skills-section"><Skills /></Section>
    <Section id="portfolio" className="portfolio-section"><Portfolio /></Section>
    <Section id="contact" className="contact-section"><Contact /></Section>
  </div>

export default IndexPage
