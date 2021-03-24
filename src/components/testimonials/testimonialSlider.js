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
      testimonial: "Hoda has great understanding of space, colour, lighting and design. Very insightful about a wide range of design subjects, she brings unique and sophisticated perspective to the project, patiently leading through design options and guiding towards the final design. Would highly recommended her.",
      author: "Mark Lannotti",
      role: "Non-Executive Director",
      company: "Savannah Energy"
    },
    {
      testimonial: "When Hoda gets her hand on design concept or design problem you end up feeling sorry for the issue, she’s tenacious, intelligent and hugely passionate. Hoda always stood out as one of the most creatively minded and able designers, planner at Cityspace.",
      author: "Anthony Akinlolu",
      role: "Site Manager",
      company: "Cityspace"
    },
    {
      testimonial: "Supporting and facilitating HCP’s values with effective design solutions, interactive visual and clear presentation to our team management and staff made the transition to our new head office an enjoyable process. Overall my experience of working with Hoda was thoroughly rewarding. I would not hesitate to appoint Hoda in the future and to recommend her to my business network.",
      author: "Stuart Yeatman",
      role: "Relationship Director",
      company: "HCP"
    }
  ]
  return (
    <div className="testimonial-section">
    <article className="post-content page-template no-image">
    <h2>What people say</h2>

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
