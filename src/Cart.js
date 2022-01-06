import React from "react";
import cart from "./images/cart.png";

const Cart = () => {
  return (
    <div>
      <section className="cart">
        <img src={cart} id="shop-cart" alt="shop-cart" />
        <span id="cart-count">0 items </span>
        <button className="reset-btn">Reset Cart</button>
      </section>
    </div>
  );
};

export default Cart;
