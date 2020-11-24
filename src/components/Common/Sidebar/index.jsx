import React from 'react'
import { Link } from 'react-router-dom'
import '../../../css/styles.css'
export default () => {
  console.log('%c RENDER Nav', 'color: orange; font-size: 20px')

  return (    
      <ul className="secondaryMenus">
        <li>
          <Link to='/'>Introduction to React</Link>
        </li>
        <li>
          <Link to='/'>Pre-Requisites to create a React App</Link>
        </li>
        <li>
          <Link to='/'>How to Create a app?</Link>
        </li>
        <li>
          <Link to='/'>Main Features of React</Link>
        </li>
        <li>
          <Link to='/'>Advantages & Disadvantages of React</Link>
        </li>
      </ul>
  )

}