import React from 'react'
import "./Shoppage.css";
import { Link, NavLink } from 'react-router-dom'
import Cards from '../containers/Cards';
import ShopCards from './ShopCards';
import SearchDrop from './SearchDrop';


const Shoppage = () => {
  return (
    <>
    <div className='shoppage mb-3'>
      <h2>Shop</h2>

      <div className='shoppagebtn'>
        <Link to="/" className='text-decoration-none me-3 text-secondary'>Home</Link>
        <span>/</span>
        <Link to="/shop" className='text-decoration-none ms-3 text-secondary' >Shop</Link>
      </div>
</div>
{/*------------------------------------------------------------------------------------------- */}


<div className="shopmain">

  <aside className='aside'>

<div className="category mb-5 mt-4">
<h4>CATEGORY</h4>
<hr />
<ul className='ps-0'>
  <li className='mb-3 '><a href="" className='text-decoration-none '>Winter Collection</a></li>
  <li className='mb-3'><a href="" className='text-decoration-none'>Women's Clothes</a></li>
  <li className='mb-3'><a href="" className='text-decoration-none'>Women's Clothes</a></li>
  <li className='mb-3'><a href=""className='text-decoration-none'>Men's Clothes</a></li>
  <li className='mb-3'><a href="" className='text-decoration-none'>Kid's Clothes</a></li>
  <li className='mb-3'><a href="" className='text-decoration-none'>Uncategorized</a></li>
  <li className='mb-3'><a href="" className='text-decoration-none'>Accessories</a></li>
  <li className='mb-3' ><a href="" className='text-decoration-none'>New Arrival</a></li>
</ul>
</div>

<div className="color mb-5">
<h4>COLOR</h4>
<hr />
<ul className='ps-0'>
<li className='mb-2 '><a href="" className='text-decoration-none redcolor'>Red</a></li>
<li className='mb-2 '><a href="" className='text-decoration-none pinkcolor'>Pink</a></li>
<li className='mb-2 '><a href="" className='text-decoration-none blackcolor'>Black</a></li>
<li className='mb-2 '><a href="" className='text-decoration-none browncolor'>Brown</a></li>
<li className='mb-2 '><a href="" className='text-decoration-none bluecolor'>Blue</a></li>
<li className='mb-2 '><a href="" className='text-decoration-none greycolor'>Grey</a></li>
<li className='mb-2 '><a href=""className='text-decoration-none cholatecolor'>Cholate</a></li>
</ul>

</div>

<div className="price mb-5">
  <h4>PRICE</h4>
  <hr />
  <ul className='ps-0'>
    <li className='mb-3'><a href="" className='text-decoration-none'>Low - Medium <span>.......</span><b className='text-dark'>$10.00-$45.00</b></a></li>
    <li className='mb-3'><a href="" className='text-decoration-none'>Medium - High <span>.....</span><b className='text-dark'>$45.00-$60.00</b></a></li>
    <li className='mb-3'><a href="" className='text-decoration-none'>High - Avobe <span>............</span> <b className='text-dark'>$60.00-$200</b></a></li>

  </ul>

</div>

<div className="brand">
  <h4>BRAND</h4>
  <hr />

  <ul className='ps-0'>
    <li className='mb-3'> <a href="" className='text-decoration-none'>Walmart <span>............................................</span> <b className='text-dark'>10</b></a></li>
    <li className='mb-3'><a href="" className='text-decoration-none'>Yellow <span>................................................</span> <b className='text-dark'>70</b></a></li>
    <li className='mb-3'><a href="" className='text-decoration-none'>H & M <span>................................................</span><b className='text-dark'>37</b></a></li>
    <li><a href="" className='text-decoration-none'>Black & White<span>..................................</span><b className='text-dark'>45</b></a></li>


  </ul>
</div>


  </aside>




<div className="sortingcards">

<SearchDrop/>







<ShopCards/>

</div>

</div>



</>

    
  )
}

export default Shoppage
