import React from 'react';
import css from './App.module.scss';

import Header from '../components/oragnisms/Header';
import MainInfo from '../components/oragnisms/MainInfo';

function App() {
  return (
    <div className={css.container}>
      <Header />
      <MainInfo />
    </div>
  );
}

export default App;
