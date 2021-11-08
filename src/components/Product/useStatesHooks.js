import { useState, useReducer } from 'react';

const useStatesHooks = () => {
  const [cart, setCart] = useReducer(cartReducer, []);
  const [products, setProducts] = useState([]);
   return { cart,  products, setCart, setProducts };
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

export default useStatesHooks;