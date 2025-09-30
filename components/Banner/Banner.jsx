import React, { createContext } from "react"
import { types } from "../../types"

const BannerContext = createContext()

export default function Banner({ children, type = "congratulate" }) {
  if (!types.includes(type)) {
    type = "congratulate"
  }
  
  return (
    <BannerContext.Provider value={type}>
      <div className={`banner banner-${type}`}>{children}</div>
    </BannerContext.Provider>
  )
}

export { BannerContext }
