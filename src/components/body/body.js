import React from 'react'
import About from './about/about'
import Blogs from './blogs/blogs'
import Projects from './projects/projects'
import ContactMe from './contactme/contactMe'
export default function body() {
    return (
        <div>
            <About/>
            <Blogs/>
            <Projects/>
            <ContactMe/>
        </div>
    )
}
