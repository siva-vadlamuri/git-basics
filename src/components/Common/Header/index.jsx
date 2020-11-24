import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../assets/logo.jpg';
import '../../../css/styles.css'
export default () => {
  console.log('%c RENDER Nav', 'color: orange; font-size: 20px')

  return (
    <header className="header">
      <div>
        <img src={logo} alt="React" />
      </div>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/services'>Services</Link>
          <ul>
            <li>
              <Link to='/services/Ui'>Ui Dev</Link>
            </li>
            <li>
              <Link to='/services/Web'>Web Dev</Link>
            </li>
            <li>
              <Link to='/services/Angular'>Angular</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to='/blog'>Blog</Link>
        </li>
        <li>
          <Link to='/login'>Login</Link>
        </li>
        <li>
          <Link to='/signup'>Signup</Link>
        </li>
        <li>
          <Link to='/contact'>Contact</Link>
        </li>
        <li>
          <Link to='/admin'>Admin</Link>
        </li>
        <li>
          <Link to='/admin/setting'>Setting</Link>
        </li>
      </ul>
    </header>
  )

}