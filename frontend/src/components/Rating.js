import React from "react";

const Rating = ({ value, text }) => {
  return (
    <span>
      <span>
        <i
          className={
            value >= 1
              ? "fas fa-star text-lightning-yellow-500 text-[14px]"
              : value >= 0.5
              ? "fas fa-star-half-alt text-lightning-yellow-500 text-[14px]"
              : "far fa-star text-lightning-yellow-500 text-[14px]"
          }
        ></i>
      </span>
      <span>
        <i
          className={
            value >= 2
              ? "fas fa-star text-lightning-yellow-500 text-[14px]"
              : value >= 1.5
              ? "fas fa-star-half-alt text-lightning-yellow-500 text-[14px]"
              : "far fa-star text-lightning-yellow-500 text-[14px]"
          }
        ></i>
      </span>
      <span>
        <i
          className={
            value >= 3
              ? "fas fa-star text-lightning-yellow-500 text-[14px]"
              : value >= 2.5
              ? "fas fa-star-half-alt text-lightning-yellow-500 text-[14px]"
              : "far fa-star text-lightning-yellow-500 text-[14px]"
          }
        ></i>
      </span>
      <span>
        <i
          className={
            value >= 4
              ? "fas fa-star text-lightning-yellow-500 text-[14px]"
              : value >= 3.5
              ? "fas fa-star-half-alt text-lightning-yellow-500 text-[14px]"
              : "far fa-star text-lightning-yellow-500 text-[14px]"
          }
        ></i>
      </span>
      <span>
        <i
          className={
            value >= 5
              ? "fas fa-star text-lightning-yellow-500 text-[14px]"
              : value >= 4.5
              ? "fas fa-star-half-alt text-lightning-yellow-500 text-[14px]"
              : "far fa-star text-lightning-yellow-500 text-[14px]"
          }
        ></i>
      </span>
      <span className="text-xs ml-2 text-gray-500">{text && text}</span>
    </span>
  );
};

export default Rating;
