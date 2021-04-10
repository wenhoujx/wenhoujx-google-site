import React from 'react'

const setColor = (value) => {
    if (value === 0) {
        return undefined
    } else if (value === -1) {
        return 'black-piece'
    } else if (value === 1) {
        return 'red-piece'
    }
}

const Piece = ({ value }) => {
    return (
        <div className={`piece ${setColor(value)}`}>
        </div>
    )
}

export default Piece
