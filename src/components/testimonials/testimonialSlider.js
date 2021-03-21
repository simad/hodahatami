import React from "react"
import Slider from "react-slick";
import TestimonialItem from "./testimonialItem";
import "./testimonial.css"

function TestimonialSlider() {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    draggable: true,
    arrows: false
  };
  const testimonials = [
    {
      testimonial: "Meditation shabby chic master cleanse banh mi Godard. Asymmetrical Wes Anderson Intelligentsia you probably haven't heard of them.",
      author: "Kristi McSweeney",
      role: "Thundercats twee",
      company: "Austin selvage beard"
    },
    {
      testimonial: "She's cool.",
      author: "Silvia Mandala",
      role: "Senior Babaee",
      company: "Love Birds co"
    }
  ]
  return (
    <div className="testimonial-section">
    <article className="post-content page-template no-image">
    <h2>Shit clients say</h2>

    <div className="post-content-body testimonials">
    <Slider {...settings}>
    {testimonials.map((data, index) => {
        return (
          <TestimonialItem
            key={index}
            data={data}
          />
        )
      })}
    </Slider>
  </div>
  </article>
  </div>
  )
}

export default TestimonialSlider
