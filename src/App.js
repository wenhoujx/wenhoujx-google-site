import './App.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Gomoku from './apps/gomoku/Gomoku'
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

    </Router>
  );
}

export default App;
