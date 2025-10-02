import React from "react"
import Image from "./Image"
import { ImQuotesLeft } from "react-icons/im";

export default function Testimonial({ children }) {
  const image = []
  const content = []

  React.Children.map(children, (child) => {
    if (child.type === Image) {
      image.push(child)
    } else {
      content.push(child)
    }
  })

  return (
    <div className="testimonial-outer">
      <div className="testimonial-inner">
        {image}
        <div className="testimonial-content">
          <ImQuotesLeft style={{ color: "#FFFFFF25", height: "43px", width: "43px" }} />
          {content}
        </div>
      </div>
    </div>
  )
}
