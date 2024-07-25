import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import $ from 'jquery'; 
import Popper from 'popper.js'; 
import 'bootstrap/dist/js/bootstrap.bundle.min';

const SearchDrop = () => {
  return (
    <div className='sortingbtn me-5'>
        <div class="dropdown  ">
  <button class="btn  dropdown-toggle bg-body-secondary " type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Default Sorting
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#"><input type="search" name="" id="" /></a></li>
    <li><a class="dropdown-item" href="#">Default Sorting</a></li>
    <li><a class="dropdown-item" href="#">Name, A to Z</a></li>
    <li><a class="dropdown-item" href="#">Name, Z to A</a></li>
    <li><a class="dropdown-item" href="#">Price, low to high</a></li>
  </ul>
</div>
      
      <div className='among'>
        <p className='fs-4 ms-5'>Showing Result 08 Among 72</p>

        <i class="bi bi-grid-3x3-gap-fill ms-2 fs-4"></i>
        <i class="bi bi-list-task ms-3 fs-3 "></i>



      </div>





    </div>
  )
}

export default SearchDrop
