import React from 'react'
import { Link, NavLink } from 'react-router-dom'


const NewArrivial = () => {
  return (
    <div className='text-center mt-5'>
      <h1>New Arrival</h1>
      <p className='text-secondary fs-5 pb-4' >Lorem og elit, sed do eiusmod tempor incididunt ut labore et dolore magna  <br />aliqua. Ut enim.</p>
<Link to="/cards" className='text-decoration-none me-5 text-secondary fs-5 '>ALL</Link>
<Link to="/cards"className='text-decoration-none me-5 text-secondary fs-5'>MEN</Link>
<Link to="/cards"className='text-decoration-none me-5 text-secondary fs-5'>WOMEN</Link>
<Link to="/cards"className='text-decoration-none me-5 text-secondary fs-5'>KIDS</Link>
<Link to="/cards"className='text-decoration-none  text-secondary fs-5'>ACCESSORIES</Link>



    </div>
  )
}

export default NewArrivial
