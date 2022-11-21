import { Route, Routes } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Home from './pages/Home';
import { Cookings } from './apps/cookings/Cookings'
import { AboutMe } from './apps/about-me/AboutMe'
import { Gomoku } from './apps/gomoku/Gomoku'
import GameOfLife from './apps/game-of-life/GameOfLife';
import GreWords from './apps/gre-words/GreWords';
import PhotoArt from './apps/photo-art/PhotoArt';

function App() {
  return (
    <Container>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cookings' element={<Cookings />} />
        <Route path='/me' element={<AboutMe />} />
        <Route path='/gomoku' element={<Gomoku />} />
        <Route path='/game-of-life' element={<GameOfLife />} />
        <Route path='/gre-words' element={<GreWords />} />
        <Route path='/photo-art' element={<PhotoArt/>} />

      </Routes>
    </Container>
  );
}

export default App;
