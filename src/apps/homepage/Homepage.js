import React from 'react'
import './Homepage.css'
import { Link, useLocation } from 'react-router-dom'
import Header from './Header'

const Homepage = () => {
    const location = useLocation()

    return (
        <>
            {
                location.pathname === '/' &&
                (<div
                    className='homepage-container'
                >
                    <Header />
                    <Link to='/me'>About Me</Link>
                    <Link to='/gomoku'>Gomoku(Connect-Five) Game</Link>
                </div>
                )
            }
        </>
    )
}

export default Homepage
