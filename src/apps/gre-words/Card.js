import React, { useState, useEffect, useCallback } from 'react'

const left = 37
const right = 39

const Card = ({ nextWord: { word, meaning }, onKnow, onNotKnow }) => {
    const [showMeaning, setShowMeaning] = useState(false)

    const clickNextWord = useCallback(() => {
        console.log('show next word')
        setShowMeaning(false)
        onNotKnow()
    }, [onNotKnow])

    const clickKnow = useCallback(() => {
        onKnow()
    }, [onKnow])

    const clickNotKnow = useCallback(() => {
        setShowMeaning(true)
    }, [])

    const onKeyDown = useCallback((e) => {
        if (e.keyCode === left) {
            console.log('left arrow')
            clickNotKnow()
        } else if (e.keyCode === right) {
            console.log('right arrow')
            showMeaning ? clickNextWord() : clickKnow()
        }
    }, [clickNotKnow, showMeaning, clickNextWord, clickKnow])

    useEffect(() => {
        window.addEventListener('keydown', onKeyDown)
        return () => {
            window.removeEventListener('keydown', onKeyDown)
        }
    }, [onKeyDown])

    return (
        <div className='card-container'>
            <div className='card-control'>
                {
                    showMeaning ?
                        <button
                            className='btn'
                            onClick={clickNextWord}
                        >
                            next word (&#x2192;)</button>
                        : (
                            <>
                                <button
                                    className='btn'
                                    onClick={clickNotKnow}
                                >
                                    (&#x2190;) I do NOT know this word </button>
                                <button
                                    className='btn'
                                    onClick={clickKnow}
                                >
                                    I know this word (&#x2192;)</button>

                            </>)
                }
            </div>
            <div className='card'>
                {word}
            </div>
            {
                showMeaning &&
                <div className='meaning'>
                    {meaning}
                </div>
            }


        </div>
    )
}

export default Card
