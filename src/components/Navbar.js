import React from 'react'
import { Link } from 'react-router-dom'

import logo1 from '../logo.png'
import './navbar.css'
const Navbar = () => {
  return (
 <>
 <nav className='nav' >

 <img src={logo1} className ='pokemon-logo'/>



 {/* <div>
 <input type='text' />

 </div> */}
 </nav>
 </>
  )
}

export default Navbar