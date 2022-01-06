import React from "react";
import Shopcard from "../Shopcard";
import Cart from "../Cart";

var resetBtn = document.querySelector(".reset-btn");
var cartCountText = document.querySelector("#cart-count");
var ogBtn = document.querySelector("#og-btn");
var bigBtn = document.querySelector("#big-btn");
var citBtn = document.querySelector("#cit-btn");
var spressBtn = document.querySelector("#spress-btn");
var peachBtn = document.querySelector("#peach-btn");
var ginBtn = document.querySelector("#gin-btn");
var pinkBtn = document.querySelector("#pink-btn");
var blueBtn = document.querySelector("#blue-btn");
var yellowBtn = document.querySelector("#yellow-btn");
var mugBtn = document.querySelector("#mug-btn");
var shotBtn = document.querySelector("#shot-btn");
var ogflaskBtn = document.querySelector("#ogflask-btn");
var eflaskBtn = document.querySelector("#eflask-btn");
var shirtBtn = document.querySelector("#shirt-btn");
var count = 0;

function addToCartList() {
  count = count + 1;
  if (count === 1) {
    cartCountText.textContent = "1 item";
  } else {
    cartCountText.textContent = count + " items";
  }
}

ogBtn.addEventListener("click", addToCartList);
bigBtn.addEventListener("click", addToCartList);
citBtn.addEventListener("click", addToCartList);
spressBtn.addEventListener("click", addToCartList);
peachBtn.addEventListener("click", addToCartList);
ginBtn.addEventListener("click", addToCartList);
pinkBtn.addEventListener("click", addToCartList);
blueBtn.addEventListener("click", addToCartList);
yellowBtn.addEventListener("click", addToCartList);
mugBtn.addEventListener("click", addToCartList);
shotBtn.addEventListener("click", addToCartList);
ogflaskBtn.addEventListener("click", addToCartList);
eflaskBtn.addEventListener("click", addToCartList);
shirtBtn.addEventListener("click", addToCartList);

function resetCart() {
  count = 0;
  cartCountText.textContent = count + " items";
}

resetBtn.addEventListener("click", resetCart);

const Shop = () => {
  return (
    <div>
      <h1>Salt City Marketplace</h1>
      <Cart />
      <Shopcard />
    </div>
  );
};

export default Shop;
