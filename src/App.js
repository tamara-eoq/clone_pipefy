import React from 'react';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import GlobalStyle from './styles/global';

import Header from './components/Header';
import Boards from './components/Boards';

function App() {
  return (
    <DndProvider>
    <Header />
    <Boards />

    <GlobalStyle />
    </DndProvider>
  );
}

export default App;
