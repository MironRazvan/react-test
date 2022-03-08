import React from "react"
import { Link } from "react-router-dom"

export default function() {
    return (
        <nav className="nav--container">
            <h3 className="nav--title">Title</h3>
            <div className="nav--links--container">
                <Link className="nav--link" to="/">Home</Link>
                <Link className="nav--link" to="/Contact">Contact</Link>
                <Link className="nav--link" to="/AboutUs">About Us</Link>
            </div>
        </nav>
    )
}
