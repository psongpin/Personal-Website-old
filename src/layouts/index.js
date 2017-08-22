import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'


import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/index.scss'

const Header = () =>
  <div>
    <p className='text-center'>Header</p>
  </div>

const TemplateWrapper = ({ children }) =>
  <div>
    <Helmet
      title='Paul Simon Ongpin - Personal Page'
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    >
      <link href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700" rel="stylesheet" />
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
    </Helmet>

    <div className='site-content'>
      {children()}
    </div>
  </div>

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
