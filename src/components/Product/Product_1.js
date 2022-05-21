
import React from 'react';
import './Product.css';

export default function Product() {
  return(
    <div className="wrapper">
      <div>
        Shopping Cart: 0 total items.
      </div>
      <div>Total price: 0</div>

      <div className="product"><span role="img" aria-label="robot">🤖</span></div>
      <button>+</button> 
      <button>-</button>
    </div>
  )
}



