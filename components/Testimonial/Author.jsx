import React, { useContext } from "react"
import { TestimonialContext } from "./Testimonial"

export default function Role({ name, role }) {
  const { imageExists } = useContext(TestimonialContext)

  const Author = imageExists ? (
    <>
      <span className="testimonial-name">{name}</span>
      <span className="testimonial-role">{role}</span>
    </>
  ) : (
    <div>
      <span className="testimonial-name-no-image">{name}</span>
      <span style={{color: "#2E59F3", fontWeight: "800", margin: "0% 1%"}}>/</span>
      <span className="testimonial-role-no-image">{role}</span>
    </div>
  )

  return Author
}
