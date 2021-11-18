import React from "react";

const Product = ({ product }) => {
  const { name, description } = product;
  return (
    <div className="col-lg-4 col-md-6 col-sm-6">
      <div className="shop-block">
        <img
          src="https://www.canadianwood.in/wp-content/uploads/2018/08/westernhamlock.jpg"
          alt=""
          className="img-fluid"
        />
        <div className="content">
          <h4 className="mt-4 mb-2 title-color">{name}</h4>
          <p className="mb-4">{description}</p>
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
