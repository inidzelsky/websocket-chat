import React from 'react';
import Navbar from './components/layout/Navbar/Navbar';
import Container from './components/Container/Container';

import './App.css';

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Container />
    </>
  );
};

export default App;
