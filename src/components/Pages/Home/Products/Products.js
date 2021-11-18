import React from "react";
import Product from "../../Shop/Product/Product";
const products = [
  {
    name: "this is our product",
    description:
      "this is our description for product is our nice and awsome hahaha",
  },
  {
    name: "this is our product",
    description:
      "this is our description for product is our nice and awsome hahaha",
  },
  {
    name: "this is our product",
    description:
      "this is our description for product is our nice and awsome hahaha",
  },
  {
    name: "this is our product",
    description:
      "this is our description for product is our nice and awsome hahaha",
  },
  {
    name: "this is our product",
    description:
      "this is our description for product is our nice and awsome hahaha",
  },
  {
    name: "this is our product",
    description:
      "this is our description for product is our nice and awsome hahaha",
  },
];
const Products = () => {
  return (
    <section className="section service-2">
      <div className="container">
        <div className="col-lg-7 mx-auto">
          <div className="section-title text-center">
            <h2>New Collection</h2>
            <div className="divider mx-auto my-3"></div>
          </div>
        </div>
        <div className="row gy-5">
          {products.map((product) => (
            <Product key={product.name} product={product}></Product>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
