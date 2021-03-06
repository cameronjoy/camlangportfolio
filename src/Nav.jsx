import React from 'react'
import {BsCodeSlash} from "react-icons/bs"

export default function Nav() {
    return (
        <nav>
        <ul className="nav ">
        <li className="nav-item">
            <a className="nav-link" href="#"><BsCodeSlash/></a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="#home">Home</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="#about">About</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="#projects">Projects</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="#contact">Contact</a>
        </li>
    </ul>
</nav>
    )
}
