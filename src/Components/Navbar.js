import { useState } from "react"
import React from 'react'

function Navbar() {
  return (
	<>
		<nav className="navbar"></nav>
		<div className="navbar-container">
			<Link to= "/" className="navbar-logo"></Link>
			CRIZ
		</div>
	</>
  )
}

export default Navbar