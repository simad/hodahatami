import React from "react"
import "./testimonial.css"

const TestimonialItem = props => {
  return (
      <div className="content">
        <div className="slider single-item">
          <div className="quote-container">
            <div className="quote">
              <blockquote>
                <p>{props.data.testimonial}</p>
                <cite>
                  <span>{props.data.author}</span>
                  <br/>
                  {props.data.role}
                  <br/>
                  {props.data.company}
                </cite>
              </blockquote>
            </div>
          </div>
      </div>
  </div>
  )
}

export default TestimonialItem
