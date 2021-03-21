import './App.css';
import { produce } from 'immer';
import { useState } from 'react'
import Square from './components/Square';
import { nRows, nCols } from './components/Game'


function App() {
  const [board, setBoard] = useState(() => {
    const rows = []
    for (let i = 0; i < nRows; i++) {
      rows.push(Array.from(Array(nCols), () => 0))
    }
    return rows
  })
  const [turn, setTurn] = useState(-1)

  // click a square 
  const onSelect = (row, col) => {
    if (board[row][col] === 0) {
      setBoard((currentBoard) => produce(currentBoard, copy => { copy[row][col] = turn }))
      nextTurn()
    }
  }

  const nextTurn = () => {
    setTurn(turn === -1 ? 1 : -1)
  }

  const clearBoard = () => {
    setBoard((currentBoard) => {
      return produce(currentBoard, copy => {
        for (let i = 0; i < nRows; i++) {
          for (let j = 0; j < nCols; j++) {
            copy[i][j] = 0
          }
        }
      })
    })
    // always start with black
    setTurn(-1)
  }

  const regretOnce = () => {

  }
  return (
    <div className='container'>



      <div className='board'
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${nCols}, 30px)`
        }}
      >
        {board.map((row, rowIndex) =>
          row.map((_, colIndex) =>
            <Square
              row={rowIndex}
              col={colIndex}
              value={board[rowIndex][colIndex]}
              onSelect={onSelect}
            />
          )
        )}
      </div>

      <div className='controls'>
        <div className='turn-shower'>
          {turn === -1 ? 'black/黑 turn' : 'white/白 turn'}
        </div>

        <button
          className='btn'
          onClick={regretOnce}
        >
          Regret Once</button>

        <button
          className='btn'
          onClick={clearBoard}
        >
          Clear</button>

      </div>

    </div>
  );
}

export default App;
