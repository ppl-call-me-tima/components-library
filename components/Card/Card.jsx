import React, { useState } from "react"

export default function Card({ children }) {
  const [hover, setHover] = useState(false)

  function handleMouseEnter() {
    setHover(true)
  }

  function handleMouseLeave() {
    setHover(false)
  }

  return (
    <div className="card-outer">
      <div className="card-empty"></div>
      <div
        className={`card-inner ${hover ? "hover" : ""}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >{children}</div>
    </div>
  )
}
