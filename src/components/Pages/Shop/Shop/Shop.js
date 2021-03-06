import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Product from "../Product/Product";
import "./Shop.css";
import Loader from "react-js-loader";
import useAuth from "../../../../hooks/useAuth";

const Shop = () => {
  const { isLoading, setIsLoading } = useAuth();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    axios.get("https://woodbazar.herokuapp.com/api/products").then((res) => {
      setProducts(res.data.products);
      setIsLoading(false);
    });
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
            {isLoading ? (
              <Loader
                type="bubble-top"
                bgColor={"#a76643"}
                color={"#a76643"}
                title={"Loading"}
                size={100}
              />
            ) : (
              products.map((product) => (
                <Product key={product._id} product={product}></Product>
              ))
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Shop;
