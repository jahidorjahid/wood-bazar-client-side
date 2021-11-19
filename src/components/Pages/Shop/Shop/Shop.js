import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/products")
      .then((res) => setProducts(res.data.products));
  }, []);
  return (
    <>
      <section className="page-title shop-bg">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="block text-center">
                <span className="text-white">Our Shop</span>
                <h1 className="text-capitalize mb-5 text-lg">What We Sale</h1>

                <ul className="list-inline breadcumb-nav">
                  <li className="list-inline-item">
                    <Link to="/" className="text-white">
                      Home
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <span className="text-white">/</span>
                  </li>
                  <li className="list-inline-item">
                    <Link to="/shop" className="text-white-50">
                      Our Shop
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section service-2">
        <div className="container">
          <div className="row gy-5">
            {products.map((product) => (
              <Product key={product._id} product={product}></Product>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Shop;
