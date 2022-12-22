import trash from '../assets/trash.svg';
import '../styles/cart-modal.scss';
import { useContext } from 'react';
import { context } from '../App';
import Button from "react-bootstrap/Button";

const CardCartNav = () => {
  const { cart, setCart, setView } = useContext(context);

  return (
    <article
      className='cart-modal container mt-2'
      style={{
        position: 'absolute',
        width: '320px',
        userSelect: 'none',
        zIndex: '3',
        botton: '20px',
      }}
    >
      <h3
        className='pb-2 mt-2'
        style={{ fontSize: '1.5rem', borderBottom: 'solid #bbb 1px' }}
      >
        Cart
      </h3>
      {cart.map((entry) => {
        if (entry !== undefined) {
          return (
            <section
              key={entry.id}
              className='d-flex align-items-center justify-content-center gap-1 py-2'
            >
              <img
                className='main-img'
                src={entry.img}
                alt='Product'
                style={{ width: '60px' }}
              />
              <span className='price ms-2'>$ {entry.price} k</span>
              <span className='amount'>x {entry.amount}</span>
              <span className='total mx-3'>$ {entry.price * entry.amount}</span>
              <img
                onClick={() => {
                  console.log(cart);
                  setCart(cart.filter((element) => entry.id !== element.id));
                }}
                src={trash}
                alt='trash icon'
                style={{ cursor: 'pointer', width: '30px' }}
              />
            </section>
            
          );
        }
      })}
      <Button className='m-3' onClick={() => {
        setView('cart')
      }}>Go to Cart</Button>
    </article>
  );
};

export default CardCartNav;
