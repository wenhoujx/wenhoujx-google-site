import React from 'react'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'

export function AboutMe() {
    return (
        <Card className='w-80'>
            <Card.Body>
                <Card.Title>I am Wenshuai Hou</Card.Title>
                <Card.Text>
                    I am a backend dev works on JAVA, JVM, python, kubernete, CI, jupyterlab, and tons of other things.
                </Card.Text>
                <Card.Text>
                    This personal website is my personal journey to explore the frontend and react.
                </Card.Text>
                <Card.Link href="mailto:wenhoujx@gmail.com" subject='From wenhoujx.com'>Contact Me via Email: wenhoujx@gmail.com</Card.Link>
                <Card.Link href='/'>Go Back to Home</Card.Link>
            </Card.Body>
        </Card>
    )
}
