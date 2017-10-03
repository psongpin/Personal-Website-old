import React from 'react'
import Link from 'gatsby-link'
import '../styles/404/_index.scss'


const NotFoundPage = () =>
  <div className='page-404 text-center container-fluid'>
    <h1><strong>&lt;Page /&gt;</strong> does not exist yet!</h1>
    <p>You just hit a route that is not yet created.</p>
    <div className="link-404">
      <Link to="/" className="btn btn-rounded">Go Back to Home</Link>
    </div>
  </div>

export default NotFoundPage
