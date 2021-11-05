import React, { useReducer } from 'react';
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

function cartReducer(state, product) {
  return [...state, product.name]
}

function totalReducer(state, product) {
  return state + product.price;
}

export default function Product() {
  const [cart, setCart] = useReducer(cartReducer, []);
  const [total, setTotal] = useReducer(totalReducer, 0);

  function add(product) {
    setCart(product);
    setTotal(product);
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