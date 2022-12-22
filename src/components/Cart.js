import React from 'react'
import { useContext } from 'react';
import { context } from '../App';
import trash from '../assets/trash.svg';

const CartComponent = () => {
  
  const { cart, setCart } = useContext(context);

  return (
    <main>
      <h1>CART</h1>
      {
        cart.map((product) => {
          return (
            <section key={product.id}>
              <img src={product.img} alt={product.product} />
              <h2>{product.product}</h2>
              <h3>{product.price} x {product.amount}</h3>
              <h3>{product.price * product.amount}</h3>
              <img src={trash} alt='trash icon' onClick={() => {
                setCart(
                  cart.filter((entry) => entry.id !== product.id)
                )
              }} />
            </section>
          )
        })
      }
      <h2>TOTAL: {cart[0] ? cart.reduce((acc, e) => acc + (e.price * e.amount), 0) : 0}</h2>
    </main>
  )
}

export default CartComponent
