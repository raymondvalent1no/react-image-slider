import React, { useState } from "react";
import { Images } from "./Images";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
const ImageSlider = ({ slides }) => {
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
      <FaArrowLeft className="left-arrow" onClick={prevSlide} />
      <FaArrowRight className="right-arrow" onClick={nextSlide} />
      {Images.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <img className="image" src={slide.image} alt="img" />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default ImageSlider;
