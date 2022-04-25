import React from 'react'
import Navbar from '../navbar/Navbar'
import './style.css'
import Footer from '../footer/Footer'

export default function About() {
  return (
    <>
    <Navbar />
    <div className='about'>
    <div className='about-para'>
    <h2>Who We Are</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <p>Faucibus interdum posuere lorem ipsum. Arcu felis bibendum ut tristique et egestas quis ipsum suspendisse. Imperdiet nulla malesuada pellentesque elit eget gravida cum. Non curabitur gravida arcu ac tortor dignissim convallis aenean. </p>
    </div>
    <div className='image'>
      <img src={require("./about.jpg")} alt=""/>
    </div>
    </div>
    <Footer />
    </>
  )
}


