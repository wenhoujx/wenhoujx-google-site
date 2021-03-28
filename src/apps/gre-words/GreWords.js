import React, { useState } from 'react'
import Card from './Card'
import Complete from './Complete'
import './GreWords.css'
import { produce } from 'immer'
import TextareaAutosize from 'react-textarea-autosize'
import data from './words.json'

const GreWords = () => {
    const [know, setKnow] = useState([])
    const [notKnow, setNotKnow] = useState([])
    const [remaining, setRemaining] = useState(() => {
        const words = []
        for (let key in data) {
            words.push({
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
            copy.push(remaining[0])
        }))
        nextWord()
    }

    const onNotKnow = () => {
        setNotKnow((current) => produce(current, copy => { copy.push(remaining[0]) }))
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
        <div className='main-container'>
            {remaining.length === 0 ?
                <Complete />
                : <Card
                    nextWord={remaining[0]}
                    onKnow={onKnow}
                    onNotKnow={onNotKnow}
                />}
            <div
                className='review'
            >
                <div>
                    <p>Review</p>
                    <TextareaAutosize
                        className='note'
                        readOnly
                        value={notKnow.map(({ word, meaning }) => `${word}: ${meaning}`).join('\r\n\r\n')}
                    />
                </div>
                <div>
                    <p>Mastered</p>
                    <TextareaAutosize
                        className='note'
                        readOnly
                        wrap='soft'
                        value={know.map(({ word, meaning }) => `${word}: ${meaning}`).join('\r\n\r\n')}
                    />

                </div>

            </div>
        </div>
    )
}

export default GreWords
