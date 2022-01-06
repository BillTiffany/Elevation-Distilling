import React from "react";
import og1 from "./images/og-pumpkin.jpg";
import cit from "./images/citrus.JPG";
import bigog from "./images/large-original.jpg";
import espress from "./images/espresso-scary.jpg";
import peach from "./images/peachharvest.JPG";
import gin from "./images/gin-lake.jpg";
import pink from "./images/shades-pink.jpg";
import blue from "./images/shades-blue.jpg";
import yellow from "./images/shades-yellow.jpg";
import yellow2 from "./images/shades-yellow2.jpg";
import flaskog from "./images/flask-og.jpg";
import flaskspres from "./images/flask-spres.jpg";
import mug from "./images/espresso-mug.jpg";
import shotglass from "./images/espresso-shot-paris.jpg";
import shirt from "./images/shirts.jpg";

const Shopcard = () => {
  return (
    <div>
      <h2 className="spirit-header">★★ Spirits ★★</h2>
      <div className="drink-card">
        <img className="drink-pic" src={og1} alt="og1" />
        <p className="description">Salt City Vodka</p>
        <p className="card-text">
          "The original Classic sipping Vodka"
          <p className="pricing">
            <br></br>750ml 35%ALC/VOL<br></br>
            $19.99
          </p>
        </p>
        <button className="drink-btn" id="og-btn">
          Add to Cart
        </button>
      </div>
      <div className="drink-card">
        <img className="drink-pic" src={bigog} alt="bigog" />
        <p className="description">Vodka Half Gallon</p>
        <p className="card-text">
          "Even more of a good thing"
          <p className="pricing">
            <br></br>1.75L 35%ALC/VOL<br></br>
            $39.99
          </p>
        </p>
        <button className="drink-btn" id="og-btn">
          Add to Cart
        </button>
      </div>
      <div className="drink-card">
        <img className="drink-pic" src={cit} alt="citrus" />
        <p className="description">Salt City Citrus</p>
        <p className="card-text">
          "Crisp and Delicious"
          <p className="pricing">
            <br></br>750ml 35%ALC/VOL<br></br>
            $19.99
          </p>
        </p>
        <button className="drink-btn" id="og-btn">
          Add to Cart
        </button>
      </div>
      <div className="drink-card">
        <img className="drink-pic" src={espress} alt="espresso" />
        <p className="description">Salt City Espresso</p>
        <p className="card-text">
          "Start the morning right"
          <p className="pricing">
            <br></br>750ml 35%ALC/VOL<br></br>
            $19.99
          </p>
        </p>
        <button className="drink-btn" id="og-btn">
          Add to Cart
        </button>
      </div>
      <div className="drink-card">
        <img className="drink-pic" src={peach} alt="peach" />
        <p className="description">Salt City Peach</p>
        <p className="card-text">
          "Harvest Fresh"
          <p className="pricing">
            <br></br>750ml 35%ALC/VOL<br></br>
            $19.99
          </p>
        </p>
        <button className="drink-btn" id="og-btn">
          Add to Cart
        </button>
      </div>
      <div className="drink-card">
        <img className="drink-pic" src={gin} alt="gin" />
        <p className="description">Lake Side Gin</p>
        <p className="card-text">
          "On the rocks, by the rocks"
          <p className="pricing">
            <br></br>750ml 35%ALC/VOL<br></br>
            $19.99
          </p>
        </p>
        <button className="drink-btn" id="og-btn">
          Add to Cart
        </button>
      </div>
      {/* Merchandise and Apparel */}
      <h2 className="spirit-header">★★★ Merch and Apparel ★★★</h2>
      <div className="drink-card">
        <img className="drink-pic" src={pink} alt="pink-shades" />
        <p className="description">Salt City Shades</p>
        <p className="card-text">
          PINK
          <p className="pricing">
            <br></br>$9.99<br></br>1 pair
          </p>
        </p>
        <button className="drink-btn" id="og-btn">
          Add to Cart
        </button>
      </div>
      <div className="drink-card">
        <img className="drink-pic" src={blue} alt="blue-shades" />
        <p className="description">Salt City Shades</p>
        <p className="card-text">
          BLUE
          <p className="pricing">
            <br></br>$9.99<br></br>1 pair
          </p>
        </p>
        <button className="drink-btn" id="og-btn">
          Add to Cart
        </button>
      </div>
      <div className="drink-card">
        <img className="drink-pic" src={yellow} alt="yellow-shades" />
        <p className="description">Salt City Shades</p>
        <p className="card-text">
          YELLOW
          <p className="pricing">
            <br></br>$9.99<br></br>1 pair
          </p>
        </p>
        <button className="drink-btn" id="og-btn">
          Add to Cart
        </button>
      </div>
      {/* mug */}
      <div className="drink-card">
        <img className="drink-pic" src={mug} alt="espresso-mug" />
        <p className="description">SC Espresso Mug</p>
        <p className="card-text">
          Gold on Black
          <p className="pricing">
            <br></br>$17.99<br></br>1 ea.
          </p>
        </p>
        <button className="drink-btn" id="og-btn">
          Add to Cart
        </button>
      </div>
      <div className="drink-card">
        <img className="drink-pic" src={shotglass} alt="shotglass" />
        <p className="description">Espresso Shot Glass</p>
        <p className="card-text">
          Gold on Black
          <p className="pricing">
            <br></br>$7.99<br></br>1 ounce ceramic
          </p>
        </p>
        <button className="drink-btn" id="og-btn">
          Add to Cart
        </button>
      </div>
      <div className="drink-card">
        <img className="drink-pic" src={flaskog} alt="ogflask" />
        <p className="description">Salt City Flask</p>
        <p className="card-text">
          6 oz. Stainless Steel
          <p className="pricing">
            <br></br>$12.99<br></br>1 ea.
          </p>
        </p>
        <button className="drink-btn" id="og-btn">
          Add to Cart
        </button>
      </div>
      <div className="drink-card">
        <img className="drink-pic" src={flaskspres} alt="espressoflask" />
        <p className="description">Espresso Flask</p>
        <p className="card-text">
          6 oz. Stainless Steel Gold
          <p className="pricing">
            <br></br>$12.99<br></br>1 ea.
          </p>
        </p>
        <button className="drink-btn" id="og-btn">
          Add to Cart
        </button>
      </div>
      <div className="shirt-card">
        <img className="drink-pic" src={shirt} alt="shirt" />
        <p className="description">Salt City Shirt</p>
        <p className="card-text">
          <p className="pricing">
            <br></br>$19.99<br></br>1 ea.
          </p>
        </p>
        <div>
          <select name="selectList" id="selectList">
            <option value="option 1">Heathered Gray Mens Large</option>
            <option value="option 2">Heathered Gray Mens Med</option>
            <option value="option 2">Heathered Gray Mens Sm</option>
            <option value="option 1">Black Mens Large</option>
            <option value="option 2">Black Mens Med</option>
            <option value="option 2">Black Mens Sm</option>
            <option value="option 1">Red Mens Large</option>
            <option value="option 2">Red Mens Med</option>
            <option value="option 2">Red Mens Sm</option>
            <option value="option 1">Light Blue Mens Large</option>
            <option value="option 2">Light Blue Mens Med</option>
            <option value="option 2">Light Blue Mens Sm</option>
            <option value="option 1">Velvet Purple Mens Large</option>
            <option value="option 2">Velvet Purple Mens Med</option>
            <option value="option 2">Velvet Purple Mens Sm</option>
            <option value="option 1">Heathered Gray Womens Large</option>
            <option value="option 2">Heathered Gray Womens Med</option>
            <option value="option 2">Heathered Gray Womens Sm</option>
            <option value="option 1">Black Womens Large</option>
            <option value="option 2">Black Womens Med</option>
            <option value="option 2">Black Womens Sm</option>
            <option value="option 1">Red Womens Large</option>
            <option value="option 2">Red Womens Med</option>
            <option value="option 2">Red Womens Sm</option>
            <option value="option 1">Light Blue Womens Large</option>
            <option value="option 2">Light Blue Womens Med</option>
            <option value="option 2">Light Blue Womens Sm</option>
            <option value="option 1">Velvet Purple Womens Large</option>
            <option value="option 2">Velvet Purple Womens Med</option>
            <option value="option 2">Velvet Purple Womens Sm</option>
          </select>
          <button className="drink-btn" id="og-btn">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};
export default Shopcard;
