import React from 'react'
import styled from 'styled-components'

const StyledPiece = styled.div`
  height: 70%;
  width: 70%;
  border: '1px solid';
  border-radius: 50%;
  background-color: ${props => props.color === -1 ? 'black' : 'red'};
`

const Piece = ({ value }) => {
    return (
        <StyledPiece color={value} />
    )
}

export default Piece
