import React, { useState, useEffect, useCallback } from 'react'

const left = 37
const right = 39

const Card = ({ nextWord: { word, meaning }, onKnow, onNotKnow }) => {
    const [showMeaning, setShowMeaning] = useState(false)
    const [websterMenaing, setWebsterMeaning] = useState(meaning)

    const clickNextWord = useCallback(() => {
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
            clickNotKnow()
        } else if (e.keyCode === right) {
            showMeaning ? clickNextWord() : clickKnow()
        }
    }, [clickNotKnow, showMeaning, clickNextWord, clickKnow])

    useEffect(() => {
        window.addEventListener('keydown', onKeyDown)
        return () => {
            window.removeEventListener('keydown', onKeyDown)
        }
    }, [onKeyDown])


    const websterUrl = 'https://www.dictionaryapi.com/api/v3/references/collegiate/json/'
    useEffect(() => {
        (async () => {
            const url = new URL(websterUrl + word)
            url.searchParams.append('key', process.env.REACT_APP_WEBSTER_KEY)
            const shortDef = (await (await fetch(url)).json())[0]?.shortdef
            setWebsterMeaning(shortDef ?
                shortDef.map((str) => '* ' + str).join('\r\n\r\n')
                // use default meaning
                : meaning
            )
        })()
    })

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
                <p className='meaning'>
                    {websterMenaing}
                </p>
            }
        </div>
    )
}

export default Card
