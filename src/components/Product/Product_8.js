import React, { useEffect } from 'react';
import './Product.css';
import useStatesHooks from './useStatesHooks';
import axios from 'axios';

function getAmountPerProduct(cart, productName) {
    return cart.filter(item => item.name === productName).length;
}

function getTotal(cart) {
  return cart.reduce((totalCost, item) => totalCost + item.price, 0);
}

export default function Product() {
  const { cart, products, setCart, setProducts } = useStatesHooks();
  
  useEffect(() => {
    axios.get('data/data.json')
    .then(response => {
      setProducts(response.data)
    }
    );
  }, []);
  
  
  function add(product) {
    const action = { product, type: 'add' };
    setCart(action);
  }

  function remove(product) {
    const action = { product, type: 'remove' };
    setCart(action);
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