import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const AboutMe = () => {
    const location = useLocation()
    return (
        <div
            className='aboutme'
        >
            <p>
                I am a backend dev work mostly in java JVM world.
            </p>
            <p>
                This personal website is my personal journey to explore the frontend and react.
            </p>
            <br />
            <p>
                <a href='mailto:wenhoujx@gmail.com' subject='From wenhoujx.com'>
                    Contact Me via Email: wenhoujx@gmail.com
            </a>
            </p>
            <br />
            <p>
                <Link to='/'>Go Back</Link>
            </p>

        </div>
    )
}

export default AboutMe
