import React, { useState, useEffect, useCallback } from 'react'
import { Button, Stack, Card as CardBs } from 'react-bootstrap'

const left = 37
const right = 39

const Card = ({ nextWord: { word, meaning }, onKnow, onNotKnow }) => {
    const [showMeaning, setShowMeaning] = useState(false)
    const [websterMeaning, setWebsterMeaning] = useState(meaning)

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
        <Stack 
        className='d-flex align-items-center'>
            <div className='card-control'>
                {
                    showMeaning ?
                        <Button
                            onClick={clickNextWord}>
                            next word (&#x2192;)
                        </Button>
                        : (
                            <Stack direction='horizontal'
                                className='d-flex justify-content-end'>
                                <Button onClick={clickNotKnow}
                                    variant='warning'>
                                    (&#x2190;) I do NOT know this word
                                </Button>
                                <Button onClick={clickKnow}
                                    variant='success'>
                                    I know this word (&#x2192;)
                                </Button>
                            </Stack>
                        )
                }
            </div>
            {showMeaning ?
                (<CardBs className='bg-warning'>
                    <CardBs.Body>
                        <CardBs.Title>
                            {word}
                        </CardBs.Title>
                        <CardBs.Text className='text-muted'>
                            {websterMeaning}
                        </CardBs.Text>
                    </CardBs.Body>
                </CardBs>) : (
                    <CardBs className='bg-info'>
                        <CardBs.Body>
                            <CardBs.Title>{word}</CardBs.Title>
                        </CardBs.Body>
                    </CardBs>
                )}
        </Stack>

    )
}

export default Card
