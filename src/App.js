import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Gomoku from './apps/gomoku/Gomoku'
import GameOfLife from './apps/game-of-life/GameOfLife';
import AboutMe from './apps/about-me/AboutMe';
import GreWords from './apps/gre-words/GreWords';
import { ThemeProvider } from 'styled-components';
import theme from "./theme"
import { Container, Box, Message } from "theme-ui"
import { Cookings } from "./apps/cookings/Cookings"

function App() {
  const homepage = () => {
    return (
      <ThemeProvider theme={theme}>
        <Container
          p={[2, 3]}
          sx={{
            display: "flex",
            flexDirection: "column"
          }}>
          <Box>
            <h1><Message> Wenhoujx homepage </Message></h1>
          </Box>
          <Box p={2}>
            <Link to='/cookings'>My Cooking Recipes</Link>
          </Box>
          <Box p={2}>
            <Link to='/gomoku'>Gomoku(Connect-Five) Game</Link>
          </Box>
          <Box p={2}>
            <Link to='/game-of-life'>Conway's Game of Life Simulation</Link>
          </Box>
          <Box p={2}>
            <Link to='/gre-words'>GRE Volcabulary Flashcards</Link>
          </Box>
          <Box p={2}>
            <Link to='/me'>About Me</Link>
          </Box>
        </Container>
      </ThemeProvider>
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
          path='/cookings'
          component={Cookings} />
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