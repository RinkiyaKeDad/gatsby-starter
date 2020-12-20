import React from "react"
import containerStyles from "./container.module.css"

function container({ children }) {
  return <div className={containerStyles.container}>{children}</div>
}

export default container
