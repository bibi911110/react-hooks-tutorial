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


function getTotal(cart) {
  return cart.reduce((totalCost, item) => totalCost + item.price, 0);
}

function cartReducer(state, action) {
  switch(action.type) {
    case 'add':
      return [...state, action.product];
    case 'remove':
      const productIndex = state.findIndex(item => item.name === action.product.name);
      if(productIndex < 0) {
        return state;
      }
      const update = [...state];
      update.splice(productIndex, 1)
      return update
    default:
      return state;
  }
}

export default function Product() {
  const [cart, setCart] = useReducer(cartReducer, []);

  function add(product) {
    setCart({ product, type: 'add' });
  }

  function remove(product) {
    setCart({ product, type: 'remove' });
  }

  return(
    <div className="wrapper">
      <div>
        Shopping Cart: {cart.length} total items.
      </div>
      <div>Total: {getTotal(cart)}</div>

      <div>
        {products.map(product => (
          <div key={product.name}>
            <div className="product">
              <span role="img" aria-label={product.name}>{product.emoji}</span>
            </div>
            <button onClick={() => add(product)}>Add</button>
            <button onClick={() => remove(product)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  )
}