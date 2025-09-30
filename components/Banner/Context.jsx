import React, { useContext } from "react"
import { BannerContext } from "./Banner"

export default function Content({ children }) {
  const value = useContext(BannerContext)
  
  return (
    <div className={`content content-${value}`}>{children}</div>
  )
}
