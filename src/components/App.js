import React from "react"
import { BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Header from "./Header"
import Contact from "./Contact"
import AboutUs from "./AboutUs"
import HomePage from "./HomePage"

export default function() {
    return (
        <Router>
            <div>
                <Header />
                <div>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/Contact" element={<Contact />} />
                        <Route path="/AboutUs" element={<AboutUs />} />
                    </Routes>
                </div>
            </div>
        </Router>
    )
}
