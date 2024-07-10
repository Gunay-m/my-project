import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className=" mt-5 bannerdiv">
      <div>
      <img src="/images/banner/banner-1.webp" className="  banner-1" alt="" />

      <img src="/images/banner/banner-2.webp" className="  banner-2" alt="" />
</div>

<div className="endirim">
      <i class="bi bi-circle-fill endirimcircle"></i></div>
      <b><span className="faizmiqdari">30%</span></b>
      <span className="faizisaresi">Off</span>
    </div>
  );
};

export default Banner;
