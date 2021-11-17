import React from "react";

const Product = ({ product }) => {
  const { name, description } = product;
  return (
    <div class="col-lg-4 col-md-6 col-sm-6">
      <div class="shop-block">
        <img
          src="https://www.canadianwood.in/wp-content/uploads/2018/08/westernhamlock.jpg"
          alt=""
          class="img-fluid"
        />
        <div class="content">
          <h4 class="mt-4 mb-2 title-color">{name}</h4>
          <p class="mb-4">{description}</p>
        </div>
        <div className="d-flex justify-content-between">
          <span>Price: 345$</span>
          <button className="btn">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
