import cart from "../assets/cart.svg";
import image from "../assets/image-avatar.png";
import { useState } from "react";
import CardCartNav from "./CardCartNav";

const CartNav = () => {
  const [showCart, setShowCart] = useState(false);

  return (
    <>
      <figure className="ms-5">
        <img
          style={{ cursor: "pointer" }}
          src={cart}
          alt="cart icon"
          onClick={() => {
            setShowCart(!showCart);
          }}
        />
        {showCart ? <CardCartNav /> : <></>}
      </figure>
      <figure className="ms-2">
        <img src={image} style={{ width: "40px" }} />
      </figure>
    </>
  );
};

export default CartNav;
