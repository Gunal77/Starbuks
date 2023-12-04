import React from 'react'
import Navbar from './Navbar'
import Footer from './footer'

function Previous() {
  return (
    <div>
        <Navbar/>
        <div id='previous' className='previous-header'>
        <h2>Previous</h2>
        <img src='/weblx/images/moon-phases.gif' alt='Animated illustration shows phases of the moon'></img>
        <div className='previous-header-1'>When history repeats itself</div>
        <div className='previous-content'>Previous orders will appear here to quickly order again.</div>
        <div className='previous-header-list'> 
        <li id='box' className='previous-list'>Sign in</li>
        <li id='box-color' className='previous-list'>Join now</li>
        </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Previous