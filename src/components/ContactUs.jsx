import React from 'react'
import "./ContactUs.css";
import { Link, NavLink } from 'react-router-dom'



const ContactUs = () => {
  return (
    <>
       <div className='contactpage mb-3'>
      <h2>Contact Us</h2>

      <div className='contactpagebtn'>
        <Link to="/" className='text-decoration-none me-3 text-secondary'>Home</Link>
        <span>/</span>
        <Link to="/contact" className='text-decoration-none ms-3 text-secondary' >Contact Us</Link>
      </div>
</div>
{/* ------------------------------------------------------------------------------------------------ */}

<div className="container ">
<div className="contactmain row pb-5 pt-5">


    <div className="col-12 col-md-7">

    <form class="row g-3 needs-validation" novalidate>

        <div className="col-md-12"><h2>Get in Touch</h2></div>
  <div class="col-md-12">
    <label for="validationCustom01" class="form-label"></label>
    <input type="text" class="form-control" id="validationCustom01" placeholder='Your name*' required/>
    <div class="valid-feedback">
      Looks good!
    </div>
  </div>
  <div class="col-md-12">
    <label for="validationCustom02" class="form-label"></label>
    <input type="text" class="form-control" id="validationCustom02" placeholder='Email Address*' required/>
    <div class="valid-feedback">
      Looks good!
    </div>
  </div>
  <div class="col-md-12">
    <label for="validationCustomUsername"  class="form-label"></label>
    <div class="input-group has-validation">
     
      <input type="email" class="form-control" placeholder="Your Phone*" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required/>
      <div class="invalid-feedback">
        Please choose a username.
      </div>
    </div>
  </div>
  <div class="col-md-12">
    <label for="validationCustom03"   class="form-label"></label>
    <input type="text" class="form-control" placeholder="Message* "id="validationCustom03" required/>
    <div class="invalid-feedback">
      Please provide a valid city.
    </div>
  </div>

 
  <div class="col-12">
    <button class="btn btn-primary sendnowbtn" type="submit">Send Now</button>
  </div>
</form>

    </div>





    <div className="col-12 col-md-5 ps-5">
        <div className="col-12 pb-4"><h2>Contact info</h2></div>


        <div className="col-12 pb-4">
            <h3>Postal Address</h3>
            <span>You address goes here <br />
            </span>
            <span>221B address goes here</span>

        </div>


        <div className="col-12 pb-4">
        <h3>Zakas HQ</h3>
            <span>You address goes here <br /></span>
            <span>221B address goes here</span>
        </div>


        <div className="col-12 pb-4">
            <div className="row">
                <div className="col-6">
                    <h3>Business Phone</h3>
                    <span>+01 2 345 6789</span>
                </div>
                <div className="col-6">
                <h3>Say Hello</h3>
                <span>demo@example.com</span>

                </div>



            </div>
        </div>



        <div className="col-12">
            <h3>
        <a href=""><i class="bi bi-twitter pe-3"></i></a>
        <a href=""><i class="bi bi-google pe-3"></i></a>
        <a href=""><i class="bi bi-facebook pe-3"></i></a>
        <a href=""><i class="bi bi-instagram pe-3 iconinstagram"></i></a></h3>
        </div>

       




    </div>






</div></div>
<div className='mymap'>
        <iframe  className="mapmap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12156.838568839057!2d49.877007017949985!3d40.382046043119956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307cdf33e7abbb%3A0xf979dab1ed9eb65e!2z0JHQsNC60YMg0JHQtdC70YvQuSDQs9C-0YDQvtC0LCDQkdCw0LrRgw!5e0!3m2!1sru!2saz!4v1721806579511!5m2!1sru!2saz"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            



        </div>








    </>
  )
}

export default ContactUs
