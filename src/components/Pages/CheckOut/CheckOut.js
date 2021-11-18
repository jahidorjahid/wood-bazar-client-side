import React from "react";
import { Link } from "react-router-dom";
import Product from "../Shop/Product/Product";

const product = {
  name: "Wood for life",
  description:
    "wood is very awsome its easy to use our life we may very happy to using woodbazar",
};
const CheckOut = () => {
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
      <section className="checkout section">
        <div className="container">
          <div className="row">
            <Product product={product}></Product>

            <div className="col-lg-8">
              <div className="checkout-wrap mt-5 mt-lg-0 pl-lg-5">
                <h2 className="mb-2 title-color">Checkout for confirm Order</h2>
                <p className="mb-4">
                  Mollitia dicta commodi est recusandae iste, natus eum
                  asperiores corrupti qui velit . Iste dolorum atque similique
                  praesentium soluta.
                </p>
                <form id="#" className="checkout-form" method="post" action="#">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Full Name"
                        />
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Email Address"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <select className="form-control">
                          <option hidden disabled selected>
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
                        <select className="form-control">
                          <option hidden disabled selected>
                            Select Your City
                          </option>
                          <option value="Dhaka">Dhaka</option>
                          <option value="Chittagong">Chittagong</option>
                          <option value="Barishal">Barishal</option>
                          <option value="Rajshahi">Rajshahi</option>
                          <option value="Khulna">Khulna</option>
                          <option value="Jossore">Jossore</option>
                          <option value="Sylhet">Sylhet</option>
                          <option value="Mymensingh">Mymensingh</option>
                        </select>
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="form-group">
                        <input
                          type="phone"
                          className="form-control"
                          placeholder="Phone Number"
                        />
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Street Address"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group-2 mb-4">
                    <textarea
                      className="form-control"
                      rows="6"
                      placeholder="Special Inquery"
                    ></textarea>
                  </div>

                  <a
                    className="btn btn-main btn-round-full"
                    href="confirmation.html"
                  >
                    Confirm Order<i className="icofont-simple-right ml-2"></i>
                  </a>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CheckOut;
