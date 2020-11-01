import React from 'react'
import './header.css'


export default function header() {
//    const menuItems = ['About', 'Blogs', 'Contact Me', 'Projects', 'Skills', 'Download File']
    return (
        <div className="flex-container">
            <div className="flex-items">About</div>
            <div className="flex-items">Blogs</div>
            <div className="flex-items">Contact Me</div>
            <div className="flex-items">Projects</div>
            <div className="flex-items">Skills</div>
            <div className="flex-items">Download File</div>
        </div>
    )
}
