import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { produce } from 'immer'
import './GameOfLife.css'
import { Button, Stack } from 'react-bootstrap'

const nRows = 30
const nCols = 30
const operations = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
    [1, 1],
    [-1, -1],
    [1, -1],
    [-1, 1]
]

const GameOfLife = () => {
    const [grid, setGrid] = useState(() => {
        return Array(nRows).fill().map((row) => Array(nCols).fill(0))
    })
    const [running, setRunning] = useState(false)
    const runningRef = useRef(running)

    const setColor = (i, j) => {
        return grid[i][j] ? ' red-cell' : ''
    }
    const selectCell = (i, j) => {
        setGrid((current) => produce(current, copy => {
            copy[i][j] = 1
        }))
    }

    const runSimulation = () => {
        if (!runningRef.current) {
            return
        }
        console.log('run simulation')
        setGrid((current) => produce(current, copy => {
            for (let i = 0; i < nRows; i++) {
                for (let j = 0; j < nCols; j++) {
                    let neighbors = 0;
                    operations.forEach(([x, y]) => {
                        let newI = i + x
                        let newJ = j + y
                        if (newI >= 0 && newI < nRows && newJ >= 0 && newJ < nCols) {
                            neighbors += current[newI][newJ]
                        }
                    })
                    if (neighbors < 2 || neighbors > 3) {
                        copy[i][j] = 0
                    } else if (neighbors === 3) {
                        copy[i][j] = 1
                    }
                }
            }
        }))
        setTimeout(runSimulation, 100)
    }

    useEffect(runSimulation)

    const randomGrid = () => {
        setGrid((current) => produce(current, (copy) => {
            for (let i = 0; i < nRows; i++) {
                for (let j = 0; j < nCols; j++) {
                    copy[i][j] = Math.random() < 0.3
                }
            }
        }))
    }

    const clearGrid = () => {
        setGrid(
            Array(nRows).fill().map((row) => Array(nCols).fill(0))
        )
    }
    return (
        <div
            className='game-of-life-container'
        >
            <div className='header'>
                <a href='https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life'>
                    Conway's Game of Life Simulation
                </a>
            </div>
            <br />
            <div
                className='grid-container'
                style={{
                    display: 'grid',
                    gridTemplateColumns: `repeat(${nCols}, 20px)`
                }}
            >
                {grid.map((row, i) => row.map((_, j) => (
                    <div
                        key={`${i}-${j}`}
                        className={
                            'cell' + setColor(i, j)}
                        onClick={() => selectCell(i, j)}
                    />
                )))}

            </div>
            <Stack direction='horizontal'
                className='d-flex justify-content-center'
            >
                <Button onClick={() => {
                    runningRef.current = !running
                    setRunning(!running)
                }}>
                    {running ? 'Stop' : 'Run'}
                </Button>
                <Button onClick={randomGrid}>
                    Random
                </Button>
                <Button onClick={clearGrid}>
                    Clear
                </Button>
            </Stack>

            <div>
                <Link to='/'>Go Back to Home</Link>
            </div>
        </div >
    )
}

export default GameOfLife
