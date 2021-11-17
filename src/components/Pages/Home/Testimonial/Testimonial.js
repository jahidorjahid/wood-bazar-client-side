import React from "react";
import Carousel from "react-grid-carousel";
import Review from "../Review/Review";

const Testimonial = () => {
  return (
    <section className="section testimonial-2 gray-bg">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <div className="section-title text-center">
              <h2>Happy customer over 5000+ customer</h2>
              <div className="divider mx-auto my-4"></div>
              <p>
                Lets know moreel necessitatibus dolor asperiores illum possimus
                sint voluptates incidunt molestias nostrum laudantium. Maiores
                porro cumque quaerat.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12 testimonial-wrap-2 slick-initialized slick-slider slick-dotted">
            <div className="slick-list draggable">
              <div className="slick-track">
                <Carousel
                  cols={2}
                  rows={1}
                  gap={10}
                  loop={true}
                  autoplay={5000}
                >
                  <Carousel.Item>
                    <Review></Review>
                  </Carousel.Item>
                  <Carousel.Item>
                    <Review></Review>
                  </Carousel.Item>
                  <Carousel.Item>
                    <Review></Review>
                  </Carousel.Item>
                  <Carousel.Item>
                    <Review></Review>
                  </Carousel.Item>
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
