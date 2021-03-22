import produce from 'immer';
import { useState, useRef } from 'react'

export const nRows = 30;
export const nCols = 30;
const maxHistory = 3;

export const placePiece = (row, col) => {
    setState((s) => {
        return produce(s, copy => {
            if (copy.current.board[row, col] !== 0) {
                copy.past = [copy.current, ...copy.past[0, maxHistory - 1]]
                copy.current.board[row, col] = s.turn
                copy.current.turn = -copy.turn
            }
        })
    })
}

export const clearBoard = () => {
    setState(initialState)
}

export const rollBack = () => {
    setState((s) => {
        return produce(s, copy => {
            if (copy.past.length !== 0) {
                copy.current = copy.past[0]
                copy.past = copy.past.slice(1)
            }
        })
    })
}

const initialState = {
    // 0 is the most recent state 
    past: [],
    current: (() => {
        return ({
            board: Array(nRows).fill().map((row) => Array(nCols).fill(0)),
            turn: -1,
        })
    })()
}

const [state, setState] = useState(initialState)

export const currentStateRef = useRef(state.current)
