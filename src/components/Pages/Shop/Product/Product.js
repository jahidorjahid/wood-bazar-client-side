import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const { _id, name, price, description } = product;
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
          <span>Price: {price}$</span>
          <Link to={`/checkout/${_id}`} className="btn">
            Buy Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
