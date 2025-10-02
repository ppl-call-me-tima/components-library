import React, { useContext } from "react"
import { ImQuotesLeft } from "react-icons/im";

import { TestimonialContext } from "./Testimonial";
import WorkcationLogo from "./WorkcationLogo";

export default function Quote({ children }) {
  const { imageExists } = useContext(TestimonialContext)

  const Icon = imageExists ? (
    <ImQuotesLeft style={{ color: "#FFFFFF25", height: "43px", width: "43px" }} />
  ) : (
    <WorkcationLogo />
  )

  const QuoteContent = imageExists ? children : `“${children}”`

  return (
    <>
      {Icon}
      <span className="testimonial-quote">{QuoteContent}</span>
    </>
  )
}
