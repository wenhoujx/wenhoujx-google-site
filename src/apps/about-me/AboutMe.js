import React from 'react'
import { Link } from 'react-router-dom'
import { Flex, Text } from '@theme-ui/components'

const AboutMe = () => {
    return (
        <Flex p={2} sx={{
            flexDirection: "column"
        }}>
            <Text>I am a backend dev work mostly in java JVM world.</Text>
            <Text>This personal website is my personal journey to explore the frontend and react.</Text>
            <Text><a href='mailto:wenhoujx@gmail.com' subject='From wenhoujx.com'>
                Contact Me via Email: wenhoujx@gmail.com
            </a></Text>
            <Link to='/'>Go Back to Home</Link>
        </Flex>
    )
}

export default AboutMe
