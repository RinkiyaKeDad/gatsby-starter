import React from "react"
import { Link } from "gatsby"
import Header from "../components/header.js"

export default function Home() {
  return (
    <div>
      <Header headerText="Home Page" />
      <h1>Hello world!</h1>
      <Link to="/contact/">Contact</Link>
    </div>
  )
}
