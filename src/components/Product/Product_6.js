import React, { useReducer, useEffect, useState } from 'react';
import { fetchProductData } from '../../services/ProductService';
import './Product.css';

function getAmountPerProduct(cart, productName) {
    return cart.filter(item => item.name === productName).length;
}

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
  
  useEffect(() => {
     setProducts(fetchProductData())
  }, []);
  
  const [products, setProducts] = useState([]);
  
  function add(product) {
    setCart({ product, type: 'add' });
  }

  function remove(product) {
    setCart({ product, type: 'remove' });
  }

  return(
    <div className="wrapper">
      <div className="shoppingcart">
        <strong>Shopping Cart</strong>
        <div>
           {cart.length} total items
        </div>
        <div>Total price: {getTotal(cart)} Euro</div>
      </div>
      <div>
        {products.map(product => (
          <div key={product.name}>
            <div className="product">
                <span role="img" aria-label={product.name}>{product.emoji}</span>
            </div>
            <div className="selectproduct">
              <button onClick={() => add(product)}>+</button><b>{getAmountPerProduct(cart, product.name)}</b>
              <button onClick={() => remove(product)}>-</button>
            </div>
          </div>
        ))}
      </div>
      <br></br>
      <div className="checkout"><button>Checkout</button></div>
      <br></br>
    </div>
  )
}