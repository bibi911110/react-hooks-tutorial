import React from 'react';
import './Product.css';

export default function Product() {
  return(
    <div className="wrapper">
      <div>
        Shopping Cart: 0 total items.
      </div>
      <div>Total: 0</div>

      <div className="product"><span role="img" aria-label="gitar">🎸</span></div>
      <button>+</button> 
      <button>-</button>
    </div>
  )
}



