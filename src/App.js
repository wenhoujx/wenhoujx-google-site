import AboutMe from './apps/about-me/AboutMe';
import GameOfLife from './apps/game-of-life/GameOfLife';
import Gomoku from './apps/gomoku/Gomoku';
import GreWords from './apps/gre-words/GreWords';
import PhotoArt from './apps/photo-art/PhotoArt';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { Cookings } from "./apps/cookings/Cookings";
import { ThemeProvider, Box, Card, Container, Message, Text, Grid, Image, Flex, Avatar } from "theme-ui";
import { chefHatIcon, conwayIcon, gomokuIcon, greIcon, meIcon, timelineIcon } from "./icons"
import { theme } from "./theme";

function App() {
  const homepage = () => {
    return (
      <ThemeProvider theme={theme}>
        <Container
          variant="main">
          <Box>
            <h2><Message>Wenhoujx homepage</Message></h2>
          </Box>
          <Grid gap={2} columns={[5, 3]}>
            <Flex p={3}
              sx={{
                alignItems: "center"
              }}>
              <Avatar m={2} src={chefHatIcon} sx={{ width: "30px" }} />
              <Link to='/cookings'>
                <Text variant="icon">My Cooking Recipes</Text>
              </Link>
            </Flex>
            <Flex p={3}
              sx={{
                alignItems: "center"
              }}>
              <Avatar m={2} src={gomokuIcon} sx={{ width: "30px" }} />
              <Link to='/gomoku'><Text variant="icon">Gomoku(Connect-Five) Game</Text></Link>
            </Flex>
            <Flex p={3}
              sx={{
                alignItems: "center"
              }}>
              <Avatar m={2} src={conwayIcon} sx={{ width: "30px" }} />
              <Link to='/game-of-life'><Text variant="icon">Conway's Game of Life Simulation</Text></Link>
            </Flex>
            <Flex p={3}
              sx={{
                alignItems: "center"
              }}>
              <Avatar m={2} src={greIcon} sx={{ width: "30px" }} />
              <Link to='/gre-words'><Text variant="icon">GRE Volcabulary Flashcards</Text></Link>
            </Flex>
            <Flex p={3}
              sx={{
                alignItems: "center"
              }}>
              <Avatar m={2} src={greIcon} sx={{ width: "30px" }} />
              <Link to='/photo-art'><Text variant="icon">Photo Art</Text></Link>
            </Flex>
            <Flex p={3}
              sx={{
                alignItems: "center"
              }}>
              <Avatar m={2} src={meIcon} sx={{ width: "30px" }} />
              <Link to='/me'>
                <Text variant="icon">About Me</Text>
              </Link>
            </Flex>
          </Grid>
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
        <Route
          path='/photo-art'
          component={PhotoArt}
        />
      </Router>
    </>
  );
}

export default App;
