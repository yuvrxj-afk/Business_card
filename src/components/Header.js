import React from "react"
import profilelogo from "../images/Profile.png"

export default function Header() {
    return (
        <div className="header--container">
            <img src= {profilelogo} alt="" width="317px" height="317px"/>
        </div>
    )
}