import cart from '../assets/cart.svg';
import { useState } from 'react';
import CardCartNav from './CardCartNav';

const CartNav = () => {
  const [showCart, setShowCart] = useState(false);

  return (
    <figure>
      <img
        src={cart}
        alt='cart icon'
        onClick={() => {
          setShowCart(!showCart);
        }}
      />
      {showCart ? <CardCartNav /> : <></>}
    </figure>
  );
};

export default CartNav;
