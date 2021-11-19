import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useParams } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import Product from "../Shop/Product/Product";
import Loader from "react-js-loader";

const CheckOut = () => {
  const { productId } = useParams();
  const { user, isLoading, setIsLoading } = useAuth();
  const [product, setProduct] = useState([]);
  const { register, handleSubmit, reset } = useForm();

  // handle login with email, password
  const onSubmit = (data) => {
    setIsLoading(true);
    axios
      .post(`http://localhost:8000/api/orders`, {
        customerEmail: user.email,
        productId: product._id,
        customerCounty: data.country,
        customerCity: data.city,
      })
      .then((res) => {
        console.log(res.data);
      })
      .finally(() => {
        setIsLoading(false);
        // reset the form
        reset();
      });
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/products/${productId}`)
      .then((res) => setProduct(res.data.product));
  }, [productId]);

  return (
    <>
      <section className="page-title shop-bg">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="block text-center">
                <h1 className="text-capitalize mb-5 text-lg">Checkout</h1>

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
                    <Link to="/checkout" className="text-white-50">
                      Checkout
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Checkout form  */}
      {isLoading ? (
        <div className="py-5">
          <Loader
            type="bubble-top"
            bgColor={"#a76643"}
            color={"#a76643"}
            title={"Loading"}
            size={100}
          />
        </div>
      ) : (
        <section className="checkout section">
          <div className="container">
            <div className="row">
              <Product product={product}></Product>

              <div className="col-lg-8">
                <div className="checkout-wrap mt-5 mt-lg-0 pl-lg-5">
                  <h2 className="mb-2 title-color">
                    Checkout for confirm Order
                  </h2>
                  <p className="mb-4">
                    Mollitia dicta commodi est recusandae iste, natus eum
                    asperiores corrupti qui velit . Iste dolorum atque similique
                    praesentium soluta.
                  </p>
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="checkout-form"
                  >
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Full Name"
                            {...register("name", {
                              required: true,
                              value: user?.displayName,
                            })}
                          />
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Email Address"
                            {...register("email", {
                              required: true,
                              value: user?.email,
                            })}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <select
                            className="form-control"
                            {...register("country", { required: true })}
                          >
                            <option hidden value="">
                              Choose Country
                            </option>
                            <option value="Australia">Australia</option>
                            <option value="Bangladesh">Bangladesh</option>
                            <option value="Uganda">Uganda</option>
                            <option value="Nigeria">Nigeria</option>
                            <option value="Canada">Canada</option>
                            <option value="Nepal">Nepal</option>
                            <option value="Nuakhali">Nuakhali</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <select
                            className="form-control"
                            {...register("city", { required: true })}
                          >
                            <option hidden value="">
                              Select Your City
                            </option>
                            <option defaultValue="Dhaka">Dhaka</option>
                            <option defaultValue="Chittagong">
                              Chittagong
                            </option>
                            <option defaultValue="Barishal">Barishal</option>
                            <option defaultValue="Rajshahi">Rajshahi</option>
                            <option defaultValue="Khulna">Khulna</option>
                            <option defaultValue="Jossore">Jossore</option>
                            <option defaultValue="Sylhet">Sylhet</option>
                            <option defaultValue="Mymensingh">
                              Mymensingh
                            </option>
                          </select>
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            type="phone"
                            className="form-control"
                            placeholder="Phone Number"
                            {...register("phone", { required: true })}
                          />
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Street Address"
                            {...register("address")}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-group-2 mb-4">
                      <textarea
                        className="form-control"
                        rows="6"
                        placeholder="Special Inquery"
                        {...register("inquery")}
                      ></textarea>
                    </div>

                    <input
                      type="submit"
                      className="btn btn-main btn-round-full"
                      value="Confirm Order"
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default CheckOut;
