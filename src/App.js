import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Gomoku from './apps/gomoku/Gomoku'
import GameOfLife from './apps/game-of-life/GameOfLife';
import AboutMe from './apps/homepage/AboutMe';
import Homepage from './apps/homepage/Homepage';


function App() {
  return (
    <Router>
      <Route
        path='/'
        component={Homepage}
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
  );
}

export default App;