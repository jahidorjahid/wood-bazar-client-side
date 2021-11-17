import React from "react";
import { Link } from "react-router-dom";
import "./QuickShop.css";

const QuickShop = () => {
  return (
    <section className="quick-shop">
      <div className="container quick-bg">
        <div className="row justify-content-center">
          <div className="col-7 bg-light pt-5 rounded">
            <div className="section-title text-center">
              <h3>QUICK SHIP</h3>
              <p>Over 600 product ready to shiped today.</p>
              <Link to="/shop" className="btn btn-main-2 btn-round-full">
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickShop;
