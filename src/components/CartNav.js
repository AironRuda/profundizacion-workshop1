import cartImg from "../assets/cart.svg";
import image from "../assets/image-avatar.png";
import { useState } from "react";
import CardCartNav from "./CardCartNav";
import { useContext } from 'react';
import { context } from '../App';

const CartNav = () => {
  const [showCart, setShowCart] = useState(false);

  const { cart, setCart } = useContext(context);

  return (
    <>
      <figure className="ms-5">
        <img
          style={{ cursor: "pointer" }}
          src={cartImg}
          alt="cart icon"
          onClick={() => {
            setShowCart(!showCart);
            setCart(
              cart.filter((element) => element !== undefined)
            )
            console.log(cart)
          }}
        />
        {showCart ? <CardCartNav/> : <></>}
      </figure>
      <figure className="ms-2">
        <img src={image} alt='product' style={{ width: "40px" }} />
      </figure>
    </>
  );
};

export default CartNav;
