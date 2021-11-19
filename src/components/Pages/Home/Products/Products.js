import axios from "axios";
import React, { useEffect, useState } from "react";
import useAuth from "../../../../hooks/useAuth";
import Product from "../../Shop/Product/Product";
import Loader from "react-js-loader";

const Products = () => {
  const { isLoading, setIsLoading } = useAuth();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    axios.get("http://localhost:8000/api/products").then((res) => {
      setProducts(res.data.products);
      setIsLoading(false);
    });
  }, []);
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
  );
};

export default Products;
