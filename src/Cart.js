import React from "react";
import cart from "./images/cart.png";

const Cart = (props) => {
  //   var count = 0;
  //   let cartCountText = document.querySelector("#cart-count");
  //   let ogBtn = document.querySelector("#og-btn");
  //   let bigBtn = document.querySelector("#big-btn");
  //   let citBtn = document.querySelector("#cit-btn");
  //   let spressBtn = document.querySelector("#spress-btn");
  //   let peachBtn = document.querySelector("#peach-btn");
  //   let ginBtn = document.querySelector("#gin-btn");
  //   let pinkBtn = document.querySelector("#pink-btn");
  //   let blueBtn = document.querySelector("#blue-btn");
  //   let yellowBtn = document.querySelector("#yellow-btn");
  //   let mugBtn = document.querySelector("#mug-btn");
  //   let shotBtn = document.querySelector("#shot-btn");
  //   let ogflaskBtn = document.querySelector("#ogflask-btn");
  //   let eflaskBtn = document.querySelector("#eflask-btn");
  //   let shirtBtn = document.querySelector("#shirt-btn");
  //   let resetBtn = document.querySelector(".reset-btn");

  //   function resetCart() {
  //     count = 0;
  //     cartCountText.textContent = count + " items";
  //   }

  //   resetBtn.addEventListener("click", resetCart);

  //   function addToCartList() {
  //     count = count + 1;
  //     if (count === 1) {
  //       cartCountText.textContent = "1 item";
  //     } else {
  //       cartCountText.textContent = count + " items";
  //     }
  //   }

  //   ogBtn.addEventListener("click", addToCartList);
  //   bigBtn.addEventListener("click", addToCartList);
  //   citBtn.addEventListener("click", addToCartList);
  //   spressBtn.addEventListener("click", addToCartList);
  //   peachBtn.addEventListener("click", addToCartList);
  //   ginBtn.addEventListener("click", addToCartList);
  //   pinkBtn.addEventListener("click", addToCartList);
  //   blueBtn.addEventListener("click", addToCartList);
  //   yellowBtn.addEventListener("click", addToCartList);
  //   mugBtn.addEventListener("click", addToCartList);
  //   shotBtn.addEventListener("click", addToCartList);
  //   ogflaskBtn.addEventListener("click", addToCartList);
  //   eflaskBtn.addEventListener("click", addToCartList);
  //   shirtBtn.addEventListener("click", addToCartList);

  return (
    <div>
      <section className="cart">
        <img src={cart} id="shop-cart" alt="shop-cart" />
        <span id="cart-count">{props.cartCount} items </span>
        <button className="reset-btn" onClick={props.resetCount}>
          Reset Cart
        </button>
      </section>
    </div>
  );
};

export default Cart;
