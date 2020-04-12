import React from 'react';

import GlobalStyle from './styles/global';

import Header from './components/Header';
import Boards from './components/Boards';

function App() {
  return (
    <>
    <Header />
    <Boards />

    <GlobalStyle />
    </>
  );
}

export default App;
