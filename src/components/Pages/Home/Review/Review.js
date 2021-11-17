import React from "react";

const Review = () => {
  return (
    <div className="testimonial-block style-2 gray-bg slick-slide slick-cloned">
      <div className="testimonial-thumb">
        <img
          src="https://avatars.githubusercontent.com/u/57003080?v=4"
          alt=""
          className="img-fluid"
        />
      </div>

      <div className="client-info">
        <h4>Nice Environment!</h4>
        <span>Partho Sarothi</span>
        <p className="mt-4">
          They provide great service facilty consectetur adipisicing elit.
          Itaque rem, praesentium, iure, ipsum magnam deleniti a vel eos
          adipisci suscipit fugit placeat.
        </p>
      </div>
      <i className="icofont-quote-right"></i>
    </div>
  );
};

export default Review;
