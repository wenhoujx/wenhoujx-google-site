import './App.css';
import { produce } from 'immer';
import { useState } from 'react'
import Square from './components/Square';

function App() {

  const nRows = 30;
  const nCols = 30;
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
            cur.turn = - cur.turn
            cur.winningColor = winningColor(cur.board)
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
      return state.current.winningColor === -1 ? 'black win!' : 'white win!'
    } else {
      return state.current.turn === -1 ? 'black next' : 'white next'
    }
  }

  return (
    <div className='container'>
      <div className='board'
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${nCols}, 30px)`
        }}
      >
        {state.current.board.map((row, rowIndex) =>
          row.map((_, colIndex) =>
            <Square
              row={rowIndex}
              col={colIndex}
              value={state.current.board[rowIndex][colIndex]}
              onSelect={() => placePiece(rowIndex, colIndex)}
            />
          )
        )}
      </div>

      <div className='controls'>
        <div className='turn-shower'>
          {showNext()}
        </div>

        <button
          className='btn'
          onClick={rollBack}
        >
          Roll Back</button>

        <button
          className='btn'
          onClick={clearBoard}
        >
          {state.current.winningColor === 0
            ? 'Clear Board'
            : 'Next Game?'}
        </button>

      </div>

    </div>
  );
}

export default App;
