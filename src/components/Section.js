import React from 'react'

const Section = ({className, children}) =>
  <div className={`${className} section`}>
    {children}
  </div>

export default Section