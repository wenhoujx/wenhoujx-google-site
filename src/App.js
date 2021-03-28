import './App.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Gomoku from './apps/gomoku/Gomoku'
import GameOfLife from './apps/game-of-life/GameOfLife';
import AboutMe from './apps/about-me/AboutMe';
import GreWords from './apps/gre-words/GreWords';

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
        <Link to='/gre-words'>GRE Volcabulary Flashcards</Link>
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
        <Route
          path='/gre-words'
          component={GreWords}
        />
      </Router>
    </>
  );
}

export default App;