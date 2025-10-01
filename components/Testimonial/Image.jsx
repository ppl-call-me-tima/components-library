import React from "react"

export default function Image({ children }) {
  return (
    React.Children.map(children, (child) =>
      React.cloneElement(child, { className: "testimonial-image" })
    )
  )
}
