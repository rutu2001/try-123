import "./slideimg.css";
import React, { useState } from "react";
import {
  IoMdArrowDroprightCircle,
  IoMdArrowDropleftCircle,
} from "react-icons/all";
import { sliderData } from "../sliderData";

function slideimg({ slides }) {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className="slider">
      <IoMdArrowDropleftCircle className="left-arrow" onClick={prevSlide} />
      <IoMdArrowDroprightCircle className="right-arrow" onClick={nextSlide} />
      {sliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt={slide.index} className="image" />
            )}
          </div>
        );
      })}
    </section>
  );
}

export default slideimg;
