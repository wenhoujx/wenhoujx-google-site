import './App.css'
import { BrowserRouter as Router, Route, Link, useLocation } from 'react-router-dom'
import Gomoku from './apps/gomoku/Gomoku'
import GameOfLife from './apps/game-of-life/GameOfLife';
import AboutMe from './apps/about-me/AboutMe';

function App() {

  const homepage = () => {
    return (
      <div
        className='homepage-container'
      >
        <header
          className='header'
        >
          <h1>Wenhoujx homepage</h1>
        </header>
        <Link to='/gomoku'>Gomoku(Connect-Five) Game</Link>
        <Link to='/game-of-life'>Conway's Game of Life Simulation</Link>
        <br />

        <Link to='/me'>About Me</Link>
      </div>
    )

  }

  return (
    <>
      <Router>
        <Route
          exact
          path='/'
          render={homepage}
        />
        <Route
          path='/me'
          component={AboutMe}
        />
        <Route
          path='/gomoku'
          component={Gomoku}
        />
        <Route
          path='/game-of-life'
          component={GameOfLife}
        />
      </Router>
    </>
  );
}

export default App;