import React from "react";

const Banner = () => {
  return (
    <section className="banner">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-xl-7">
            <div className="block">
              <div className="divider mb-3"></div>
              <span className="text-uppercase text-sm letter-spacing ">
                A commitment of years
              </span>
              <h1 className="mb-3 mt-3">Decor the dreams with wood beauty</h1>

              <p className="mb-4 pr-5">
                The furniture in a house resembles the meat and potatoes of a
                dinner. Our furniture takes up the dominant part of the room and
                helps make your home feel lived in, inviting, and finish.
              </p>
              <div className="btn-container ">
                <a
                  href="appoinment.html"
                  target="_blank"
                  className="btn btn-main-2 btn-icon btn-round-full"
                >
                  Buy Now
                  <i className="icofont-simple-right ml-2  "></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
