import React from "react"

export default function Icon({ children }) {
  return (
    React.Children.map(children, (child) => {
      return React.cloneElement(child, {className: "card-icon"})
    })
  )
}
