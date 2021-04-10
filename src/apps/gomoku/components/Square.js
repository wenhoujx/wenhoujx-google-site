import React from 'react'
import Piece from './Piece'
import styled from 'styled-components'

const StyledSquare = styled.div`
  width: 40px;
  height: 40px;
  border: 'solid 0.5px black';
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ row, col }) => (row + col) % 2 ? '#B59963' : '#F0D9B5'}
`

const Square = ({ row, col, value, onSelect }) => {
    return (
        <StyledSquare
            row={row}
            col={col}
            key={`${row} -${col} `}
            onClick={() => onSelect(row, col)}
        >
            { value === 0
                || <Piece value={value} />}
        </StyledSquare >
    )
}

export default Square
