import React from 'react'
import Piece from './Piece'

const Square = ({ row, col, value, onSelect }) => {
    return (
        <div className={`square
         ${(row + col) % 2 ? 'square-dark' : 'square-light'}`}
            key={`${row} -${col} `}
            onClick={() => onSelect(row, col)}
        >
            {value === 0
                || <Piece value={value} />}
        </div>
    )
}

export default Square
