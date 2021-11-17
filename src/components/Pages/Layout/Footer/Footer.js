import React from "react";
import logo from "../../../../assets/images/logo.png";

const Footer = () => {
  return (
    <footer className="footer section gray-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mr-auto col-sm-6">
            <div className="widget mb-5 mb-lg-0">
              <div className="logo mb-4">
                <img src={logo} alt="" className="img-fluid" />
              </div>
              <p>
                Tempora dolorem voluptatum nam vero assumenda voluptate, facilis
                ad eos obcaecati tenetur veritatis eveniet distinctio possimus.
              </p>

              <ul className="list-inline footer-socials mt-4">
                <li className="list-inline-item">
                  <a href="https://www.facebook.com/themefisher">
                    <i className="icofont-facebook"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://twitter.com/themefisher">
                    <i className="icofont-twitter"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://www.pinterest.com/themefisher/">
                    <i className="icofont-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-2 col-md-6 col-sm-6">
            <div className="widget mb-5 mb-lg-0">
              <h4 className="text-capitalize mb-3">Service</h4>
              <div className="divider mb-4"></div>

              <ul className="list-unstyled footer-menu lh-35">
                <li>
                  <a href="#!">Assembly Guides </a>
                </li>
                <li>
                  <a href="#!">Furniture Packages & Fitouts</a>
                </li>
                <li>
                  <a href="#!">Trade Programme</a>
                </li>
                <li>
                  <a href="#!">New Designs</a>
                </li>
                <li>
                  <a href="#!">Gift Cards</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-2 col-md-6 col-sm-6">
            <div className="widget mb-5 mb-lg-0">
              <h4 className="text-capitalize mb-3">Help</h4>
              <div className="divider mb-4"></div>

              <ul className="list-unstyled footer-menu lh-35">
                <li>
                  <a href="#!">Contact &amp; FAQ</a>
                </li>
                <li>
                  <a href="#!">Track Your Order</a>
                </li>
                <li>
                  <a href="#!">Shipping & Delivery </a>
                </li>
                <li>
                  <a href="#!">Visit WoodBazar</a>
                </li>
                <li>
                  <a href="#!">Interest Free Finance</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="widget widget-contact mb-5 mb-lg-0">
              <h4 className="text-capitalize mb-3">Get in Touch</h4>
              <div className="divider mb-4"></div>

              <div className="footer-contact-block mb-4">
                <div className="icon d-flex align-items-center">
                  <i className="icofont-email mr-3"></i>
                  <span className="h6 mb-0">Support Available for 24/7</span>
                </div>
                <h4 className="mt-2">
                  <a href="mailto:support@email.com">Support@email.com</a>
                </h4>
              </div>

              <div className="footer-contact-block">
                <div className="icon d-flex align-items-center">
                  <i className="icofont-support mr-3"></i>
                  <span className="h6 mb-0">Mon to Fri : 08:30 - 18:00</span>
                </div>
                <h4 className="mt-2">
                  <a href="tel:+23-345-67890">+23-456-6588</a>
                </h4>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-btm py-4 mt-5">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-6">
              <div className="copyright">
                Copyright © 2021, Designed &amp; Developed by{" "}
                <a href="https://jahid.me/">Jahid Hasan</a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="subscribe-form text-lg-right mt-5 mt-lg-0">
                <form action="#" className="subscribe">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Email address"
                    required=""
                  />
                  <button
                    type="submit"
                    className="btn btn-main-2 btn-round-full"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4">
              <a className="backtop scroll-top-to reveal" href="#top">
                <i className="icofont-long-arrow-up"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
