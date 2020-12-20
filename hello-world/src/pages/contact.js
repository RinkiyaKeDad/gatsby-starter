import React from "react"
import Header from "../components/header"
import { Link } from "gatsby"

function contact() {
  return (
    <div>
      <Header headerText="Contact Me" />
      <Link to="/">Go Back</Link>
    </div>
  )
}

export default contact
