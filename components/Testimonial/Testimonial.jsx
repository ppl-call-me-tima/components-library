import React, { createContext } from "react"
import Image from "./Image"

const TestimonialContext = createContext()

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

  const imageExists = image.length === 1

  return (
    <TestimonialContext.Provider value={{ imageExists }}>
      <div className="testimonial-outer">
        <div className={`testimonial-inner ${imageExists ? "" : "testimonial-inner-no-image"}`}>
          {image}
          <div className={`testimonial-content ${imageExists ? "" : "testimonial-content-no-image"}`}>
            {content}
          </div>
        </div>
      </div>
    </TestimonialContext.Provider>
  )
}

export { TestimonialContext }
