import React, { useState } from 'react'
import Card from './Card'
import Complete from './Complete'
import { produce } from 'immer'
import data from './words.json'
import { Link } from 'react-router-dom'
import Stack from 'react-bootstrap/Stack'
import { Cart } from './Cart'

const GreWords = () => {
    const [know, setKnow] = useState([])
    const [notKnow, setNotKnow] = useState([])
    const [remaining, setRemaining] = useState(() => {
        const words = []
        for (let key in data) {
            words.push({
                // word schema 
                word: key,
                meaning: data[key]
            })
        }
        for (let i = 0; i < words.length; i++) {
            const j = Math.floor(Math.random() * (i + 1));
            [words[i], words[j]] = [words[j], words[i]]
        }
        return words
    })

    const onKnow = () => {
        console.log('add known words')
        setKnow((current) => produce(current, copy => {
            return [remaining[0]].concat(copy)
        }))
        nextWord()
    }

    const onNotKnow = () => {
        setNotKnow((current) => produce(current, copy => { return [remaining[0]].concat(copy) }))
        nextWord()
    }

    const nextWord = () => {
        if (remaining.length === 0) {
            return
        }
        setRemaining((current) => {
            return current.slice(1)
        })
    }


    return (
        <Stack gap={4}
            className='d-flex align-items-center'>
            <Link to='/'>Go Back to Home</Link>
            {remaining.length === 0 ?
                <Complete />
                : <Card
                    nextWord={remaining[0]}
                    onKnow={onKnow}
                    onNotKnow={onNotKnow}
                />}
            <Stack direction='horizontal'
                className='d-flex justify-content-center'
                gap={2}>
                <Cart
                    bgColor='#ffc008'
                    title='Review'
                    words={notKnow}></Cart>
                <Cart
                    bgColor='green'
                    title='Mastered'
                    words={know}></Cart>
            </Stack>
        </Stack>

    )
}

export default GreWords
