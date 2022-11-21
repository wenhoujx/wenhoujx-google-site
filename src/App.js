import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Home from './pages/Home';
import { TBD } from './pages/TBD'
import { Cookings } from './apps/cookings/Cookings'
import { AboutMe } from './apps/about-me/AboutMe'
import {Gomoku} from './apps/gomoku/Gomoku'


function App() {
  return (
    <Container>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cookings' element={<Cookings />} />
        <Route path='/me' element={<AboutMe />} />
        <Route path='/gomoku' element={<Gomoku />} />
        <Route path='/game-of-life' element={<TBD />} />
        <Route path='/photo-art' element={<TBD />} />

      </Routes>
    </Container>
  );
}

export default App;
