import React, { useContext } from "react"
import { FaCircleCheck } from "react-icons/fa6";
import { IoIosWarning } from "react-icons/io";
import { RxCrossCircled } from "react-icons/rx";
import { HiInformationCircle } from "react-icons/hi";

import { BannerContext } from "./Banner"

export default function Title({ children }) {
  const value = useContext(BannerContext)
  let className = "title"
  let Icon;

  if (value === "congratulate") {
    Icon = <FaCircleCheck className={`icon-${value}`} />
  } else if (value === "attention") {
    Icon = <IoIosWarning className={`icon-${value}`} />
  } else if (value === "error") {
    Icon = <RxCrossCircled className={`icon-${value}`} />
  } else if (value === "update") {
    Icon = <HiInformationCircle className={`icon-${value}`} />
  }

  return (
    <div className="upper-bar">
      {Icon}
      <div class={`title title-${value}`}>
        {children}
      </div>
    </div>
  )
}
