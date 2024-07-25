import React from 'react'
import { Link, NavLink } from 'react-router-dom'

import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className='footer'>
      <img src="/images/icons/logo.webp" alt="" /> 

      <div className='footerbtn'>
        <Link className='text-decoration-none btnfoot'>About Us</Link>
        <span>|</span>
        <Link className='text-decoration-none btnfoot'>Term & Conditions</Link>
        <span>|</span>
        <Link className='text-decoration-none btnfoot'>Policy</Link>
        <span>|</span>
        <Link className='text-decoration-none btnfoot'>Help</Link>
        <span>|</span>
        <Link className='text-decoration-none btnfoot'>Contact Us</Link>
      </div>

      <div className="links ">
        <Link className='footlink' to="https://workspaceupdates.googleblog.com/2023/04/new-community-features-for-google-chat-and-an-update-currents%20.html">Google plus<i class="bi bi-google"></i></Link>
        <Link className='footlink' to="https://www.facebook.com/">Facebook<i class="bi bi-facebook"></i></Link>
        <Link className='footlink' to="https://www.pinterest.com/">Pinterest<i class="bi bi-pinterest"></i></Link>
        <Link className='footlink' to="https://x.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoicnUifQ%3D%3D%22%7D">Twitter<i class="bi bi-twitter"></i></Link>
      </div>
      <div className="bymefoot ">
        <h3><i class="bi bi-c-circle"></i> Zakas 2024 Made With  <i class="bi bi-heart-fill"></i> BY <Link className='text-decoration-none text-danger' to="https://www.youtube.com/watch?v=woCjlrBBJko">GUNAY</Link></h3>
       

       
        <img src="/images/icons/payment.png" alt="" className='footimg'/>

      </div>




      </div>
      









    </>
  )
}

export default Footer
