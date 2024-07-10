import React from 'react'
import { Link, NavLink } from 'react-router-dom'


const Navbar = () => {
  return (
    <div className='container '>
      <nav class="navbar navbar-expand-lg ">
  <div class="container-fluid">
    <Link class="navbar-brand" to="/"><img src="/images/icons/logo.webp
    " alt="" /></Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto fs-5 me-5">
        <li class="nav-item">
          <Link class="nav-link" aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/shop">Shop</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/blog">Blog</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/pages">Pages</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/contact">Contact Us</Link>
        </li>
        
      </ul>
    </div>
    <div className='fs-4 class="collapse navbar-collapse"'>
      <ul className='navbar-nav '>
    <li class="nav-item">
          <Link class="nav-link bi bi-heart ms-3" to="/heart"></Link>
        </li>
    <li class="nav-item">
          <Link class="nav-link bi bi-cart-plus ms-3 " to="/basket"></Link>
        </li>
    <li class="nav-item">
          <Link class="nav-link bi bi-person ms-3 " to="/person"> </Link>
        </li>
    <li class="nav-item">
          <Link class="nav-link bi bi-search ms-3" to="/search"> </Link>
        </li></ul>
    {/* <i class="bi bi-heart ms-5 text-secondary" ></i>
    <a class="bi bi-cart-plus ms-3 text-secondary"></a>
    <a class="bi bi-person ms-3  text-secondary"></a>
    <a class="bi bi-search ms-3 text-secondary"></a> */}

    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
