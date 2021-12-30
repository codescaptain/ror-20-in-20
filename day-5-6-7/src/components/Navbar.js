import React from 'react'
import { NavLink } from 'react-router-dom'
import { SocialIcon } from 'react-social-icons'


const Navbar = () => {
  return (
    <header className="bg-green-800">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink  to="/"
            activeclassname="text-white"
            className="inline-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-green-800 text-3xl font-bold cursive tracking-widest"> CodesCaptain </NavLink>
          <NavLink 
            activeclassname="active"
            className="inline-flex items-center py-3 px-3 rounded text-red-200 hover:text-red-500"
            to="/post"> Blog Post </NavLink>
          <NavLink 
            activeclassname="text-red-100 bg-red-700"
            className="inline-flex items-center py-3 px-3 rounded text-red-200 hover:text-red-500"
            to="/project"> Projects </NavLink>
          <NavLink 
            activeclassname="text-red-100 bg-red-700"
            className="inline-flex items-center py-3 px-3 rounded text-red-200 hover:text-red-500" 
            to="/about"> About Me </NavLink>
        </nav>
        <div className="inline-flex py-3 px-3 my-6">
          <SocialIcon url="https://twitter.com/codescaptain" className="mr-4" target="_blank" fgColor="#fff" style={{height: 35, width: 35}} />
          <SocialIcon url="https://instagram.com/codescaptain" className="mr-4" target="_blank" fgColor="#fff" style={{height: 35, width: 35}} />
          <SocialIcon url="https://linkedin.com/ahmet-kaptan" className="mr-4" target="_blank" fgColor="#fff" style={{height: 35, width: 35}} />
      
        </div>
      </div>
    </header>
  )
}

export default Navbar
