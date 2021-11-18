import React from "react";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <section className="section contact contact-bg">
      <div className="container">
        <div className="row">
          <div className="row no-gutters">
            <div className="text-column col-xl-8 col-lg-12 col-md-12 col-sm-12 order-2 bg-white">
              <div className="inner-column">
                <div className="inner">
                  <div className="message">
                    <strong>20 Years of Experience </strong>
                    <br /> in Woodworks Business Services
                  </div>
                  <div className="text">
                    Send us a email and we’ll get in touch shortly, or phone
                    between 9:00AM to 5:00PM Monday to Friday - We would be
                    delighted to speak.
                  </div>

                  <div className="row">
                    <div className="info-block col-lg-4 col-md-4 col-sm-12">
                      <div className="inner-box">
                        <div className="icon flaticon-phone"></div>
                        <ul>
                          <li>
                            <strong>Phone</strong>
                          </li>
                          <li>
                            <a href="/">(+880) 1611023881</a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="info-block col-lg-4 col-md-4 col-sm-12">
                      <div className="inner-box">
                        <div className="icon flaticon-email"></div>
                        <ul>
                          <li>
                            <strong>Email</strong>
                          </li>
                          <li>
                            <a href="mailto:example@email.com">
                              contact@woodbazar.com
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="info-block col-lg-4 col-md-4 col-sm-12">
                      <div className="inner-box">
                        <div className="icon flaticon-worldwide"></div>
                        <ul>
                          <li>
                            <strong>Location</strong>
                          </li>
                          <li>Sylhet, Bangladesh</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="form-column col-xl-4 col-lg-12 col-md-12 col-sm-12">
              <div className="inner-column">
                <div className="request-form">
                  <h3>Request A Quote</h3>

                  <form method="post" action="blog.html" _lpchecked="1">
                    <div className="row">
                      <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                        <input
                          type="text"
                          name="username"
                          placeholder="Name"
                          required=""
                        />
                      </div>

                      <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                        <input
                          type="email"
                          name="email"
                          placeholder="Email"
                          required=""
                        />
                      </div>

                      <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                        <input
                          type="text"
                          name="phone"
                          placeholder="Phone"
                          required=""
                        />
                      </div>

                      <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                        <textarea
                          name="message"
                          placeholder="Massage"
                        ></textarea>
                      </div>

                      <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                        <button
                          className="theme-btn btn-style-four"
                          type="submit"
                          name="submit-form"
                        >
                          <span className="btn-title">Submit Now</span>{" "}
                          <span></span> <span></span> <span></span>{" "}
                          <span></span> <span></span>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
