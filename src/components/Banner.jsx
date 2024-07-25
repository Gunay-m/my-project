import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <>
      <div className=" mt-5 bannerdiv">
        <div>
          <img
            src="/images/banner/banner-1.webp"
            className="  banner-1"
            alt=""
          />

          <img
            src="/images/banner/banner-2.webp"
            className="  banner-2"
            alt=""
          />
        </div>

        <div className="endirim">
          <i class="bi bi-circle-fill endirimcircle"></i>
        </div>
        <b>
          <span className="faizmiqdari">30%</span>
        </b>
        <span className="faizisaresi">Off</span>
      </div>

      


      <div className="kolgebanner1">
        <div className="banneryazi">
        <p><b>Up Coming Discount</b></p>
         <h1><b>On Winter Clothing</b></h1>
        <a href="" className="bannerbtn">Shop now<i class="bi bi-chevron-double-right shop-now-arrow"></i></a></div>
      </div>


      <div className="kolgebanner2"> 
        <div className="banneryazi">
        <p><b>Up Coming Discount</b></p>
        <h1><b>On Winter Clothing</b></h1>
        <a href=""  className="bannerbtn">Shop now<i class="bi bi-chevron-double-right shop-now-arrow"></i></a></div></div>
      
      <div className="kolge ">
        <div className="container">
        <div className="row ustunlukler">
          <div className="col-6 col-md-3 ustunluk">
          <i class="bi bi-arrow-repeat ustunlukicon"></i>
            <h5>90 days return</h5>
            <h5 className="text-secondary">3 days for free return</h5>
            
          </div>



          <div className="col-6 col-md-3 ustunluk">
          <i class="bi bi-send ustunlukicon" ></i>
            <h5>Free Shipping</h5>
            <h5 className="text-secondary">Free Shipping on order</h5>
          </div>



          <div className="col-6 col-md-3 ustunluk">
          <i class="bi bi-inbox ustunlukicon"></i>
            <h5>Proffesional Support</h5>
            <h5 className="text-secondary">info@company.com</h5>

          </div>



          <div className="col-6 col-md-3 ustunluk">
          <i class="bi bi-gift ustunlukicon"></i>
            <h5>Gift Card</h5>
            <h5 className="text-secondary">Gift Card On Purchage</h5>
          </div>



        </div></div>
      </div>
 


      <div className="subscribe ">
<h1 className="text-center"> Subscribe To Our Newsletter</h1>
<p className="text-center">Lorem og elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim.</p>
<div className="subform">
  <input type="email"   className="emailform" placeholder="    Enter Your E-mail Address"/>
  <input type="submit"  className="submitform" value="Subscribe Now"/>
</div>



      </div>


    </>
  );
};

export default Banner;
