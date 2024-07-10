import React from 'react'
import "./Card.css";
import { Link, NavLink } from 'react-router-dom'


const Card = ({CartinSekli, CartinBasligi, CartinQiymeti}) => {
  return (
    <div>
      <Link class="card border-0 pt-5 mb-5" to="/cards">
  <img src={CartinSekli} class="card-img-top" alt="..."/>
<div className="product-action d-flex ">

    <div className="product-size action-btn pt-2 ">
         <a href="" className='text-decoration-none fs-5 text-secondary '>XL</a>
    </div>

    <div className="action-btn product-color pt-2">
         <a class="bi bi-circle-fill text-secondary fs-5"></a>
    </div>

    <div href="" className="action-btn product-like pt-2">
        <a class="bi bi-heart text-secondary fs-4"></a>
    </div>

    <div href="" className="action-btn quick-view pt-2" >
        <a class="bi bi-eye text-secondary fs-4"></a>
    </div>




</div>



  <div class="card-body ">
    <h5 class="card-title">{CartinBasligi}</h5>
    <p class="card-text text-secondary ">{CartinQiymeti}</p>
    <a href="#" class="card-button text-decoration-none text-dark ">Add to card</a>
  </div>
</Link>
    </div>
  )
}

export default Card
