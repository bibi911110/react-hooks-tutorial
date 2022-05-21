
import React, { useState } from 'react';

const products = [
  {
    emoji: "\uD83E\uDD16",
    name: 'robot',
    price: 500
  },
  {
    emoji: "\uD83E\uDDBF",
    name: 'mechanical leg',
    price: 3000,
  },
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
      <div>Shopping Cart: {cart.length} total items.</div>
      <div>Total price: {total}</div>
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

