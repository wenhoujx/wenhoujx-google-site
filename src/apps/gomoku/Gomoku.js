import './Gomoku.css';
import { Link } from 'react-router-dom'
import { produce } from 'immer';
import React, { useState } from 'react'
import { Square } from './components/Square';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Stack from 'react-bootstrap/Stack'

export function Gomoku() {
    const nRows = 20;
    const nCols = 20;
    const maxHistory = 10;
    const nWins = 5;

    const directions = [
        [0, 1], [0, -1], [1, 1], [1, -1], [1, 0], [-1, 0], [-1, 1], [-1, -1]
    ]
    const initialState = {
        // 0 is the most recent past state 
        past: [],
        current: (() => {
            return ({
                board: Array(nRows).fill().map((row) => Array(nCols).fill(0)),
                turn: -1,
                winningColor: 0
            })
        })()
    }

    const [state, setState] = useState(() => initialState)

    const placePiece = (row, col) => {
        console.log('set piece ' + row + ' ' + col)
        if (state.current.winningColor !== 0) {
            return;
        }
        setState((s) => {
            return produce(s, copy => {
                if (copy.current.board[row][col] === 0) {
                    copy.past = [copy.current, ...copy.past.slice(0, maxHistory - 1)]
                    copy.current = produce(copy.current, (cur) => {
                        cur.board[row][col] = cur.turn
                        cur.winningColor = winningColor(cur.board)
                        if (cur.winningColor === 0) {
                            cur.turn = - cur.turn
                        }
                    })
                }
            })
        })
    }

    const winningColor = (board) => {
        for (let i = 0; i < nRows; i++) {
            for (let j = 0; j < nCols; j++) {
                const startingColor = board[i][j]
                if (startingColor === 0) {
                    continue
                }
                for (const [x, y] of directions) {
                    let line = 1;
                    // start from 1 b/c the starting piece counts as 1
                    for (let step = 1; step < nWins; step++) {
                        const newI = i + x * step
                        const newJ = j + y * step
                        if (newI >= 0 && newI < nRows && newJ >= 0 && newJ < nCols) {
                            if (board[newI][newJ] === startingColor) {
                                line += 1
                            } else {
                                break
                            }
                        }
                    }
                    if (line === nWins) {
                        return startingColor
                    }
                }
            }
        }
        return 0
    }

    const clearBoard = () => {
        setState(initialState)
    }

    const rollBack = () => {
        setState((s) => {
            return produce(s, copy => {
                if (copy.past.length !== 0) {
                    console.log('roll back')
                    copy.current = copy.past[0]
                    console.log(JSON.stringify(copy.past[0]))
                    console.log(JSON.stringify(copy.current))
                    copy.past = copy.past.slice(1)
                }
            })
        })
    }

    const showNext = () => {
        if (state.current.winningColor !== 0) {
            return state.current.winningColor === -1 ? 'black win!' : 'red win!'
        } else {
            return state.current.turn === -1 ? 'black next' : 'red next'
        }
    }

    return (
        <Container className='d-flex flex-column align-items-center'>
            <Container >
                {state.current.board.map((row, rowIndex) =>
                    <Row key={rowIndex} className="justify-content-md-center flex-nowrap" xs md lg xxs={nCols}>
                        {row.map((_, colIndex) => (
                            <Col
                                key={`${rowIndex}-${colIndex}`}
                                className='d-flex align-items-center justify-content-center px-0'
                                style={{
                                    maxWidth: '35px',
                                    width: '35px',
                                    height: '35px',
                                    backgroundColor: (rowIndex + colIndex) % 2 === 1 ? '#e3ae8f' : '#aba09a',
                                }}
                                onClick={() => placePiece(rowIndex, colIndex)}
                            >
                                <Square
                                    value={state.current.board[rowIndex][colIndex]}
                                />
                            </Col>))}
                    </Row>
                )}
            </Container>
            <Stack gap={3}
                direction="horizontal"
                className='pt-1 mx-auto'            >
                <Button variant='primary'
                    onClick={rollBack}
                >
                    Roll Back
                </Button>
                <div className='turn-shower border-bottom border-2 p-2'
                    style={{
                        color: state.current.turn === 1 ? 'red' : 'black'
                    }}>
                    {showNext()}
                </div>
                <Button
                    variant='primary'
                    onClick={clearBoard}
                >
                    {state.current.winningColor === 0
                        ? 'Clear Board'
                        : 'Next Game?'}
                </Button>

            </Stack>
            <Link
                to='/'>
                Go Back to Home
            </Link>
        </Container>
    )
}
