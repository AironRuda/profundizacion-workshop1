import { Alert } from 'bootstrap';
import React from 'react'
import { useContext } from 'react';
import { context } from '../App';
import trash from '../assets/trash.svg';
import "../styles/cart.css"

const CartComponent = () => {
  
  const { cart, setCart } = useContext(context);

  return (
    <main>
      <h1>CART</h1>
      {
        cart.map((product) => {
          return (
            <section className='producto' key={product.id}>
              <div className='contenedor_principal'>

                <div className='div_image'>
                  <img className='Cart_image' src={product.img} alt={product.product} />
                  
                  <div className='div_info'>
                    <div className='contenedor_datos'>
                <span>Name</span>
              <h2 className='nombre_product'>{product.product}</h2>
              </div>
              <div className='contenedor_datos'>
                <span>Price & Amount</span>
              <h3 className='precio_cantidad'>{product.price} x {product.amount}</h3>
              </div>
              <div className='contenedor_datos'>
                <span>Total</span>
              <h3 className='total'>{product.price * product.amount}</h3>
              <div className='div_icono'><img className='img_trash' src={trash} alt='trash icon' onClick={() => {
                setCart(
                  cart.filter((entry) => entry.id !== product.id)
                )
              }} /></div>
              </div>
              
              </div></div></div>

              
            </section>
          )
        })
      }
      <div className='div_Total'><h2>TOTAL: {cart[0] ? cart.reduce((acc, e) => acc + (e.price * e.amount), 0) : 0}</h2>
      
      <button className='Buy' onClick={() => {
                  alert(
                    "holiii!!!....feliz compra"
                  );
                }}>Buy</button>
      
      </div>
    </main>
  )
}

export default CartComponent
