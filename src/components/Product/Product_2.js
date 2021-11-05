import React, { useState } from 'react';
import './Product.css';


const products = [
  {
    emoji: '\uD83C\uDFB8',
    name: 'gitar',
    price: 500
  },
  {
    emoji: '\uD83C\uDFB7',
    name: 'saxophone',
    price: 1200,
  },
  {
    emoji: '\uD83E\uDD41',
    name: 'drum',
    price: 250
  }
];

export default function Product() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  function add(product) {
    setCart(current => [...current, product.name]);
    setTotal(current => current + product.price);
  }

  return(
    <div className="wrapper">
      <div>
        Shopping Cart: {cart.length} total items.
      </div>
      <div>Total: {total}</div>
        <div>
        {products.map(product => (
          <div key={product.name}>
            <div className="product">
              <span role="img" aria-label={product.name}>{product.emoji}</span>
            </div>
            <button onClick={() => add(product)}>+</button>
            <button>-</button>
          </div>
        ))}
      </div>
    </div>
  )
}