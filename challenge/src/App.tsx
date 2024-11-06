import React from 'react';
import './App.css';
import { Container } from './components/mainComponents';
import { Header } from './components/ui/header/header';
import { BrowserRouter } from 'react-router-dom';
import { ApplicationRoutes } from './Routes/applicationRoutes';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <ApplicationRoutes />    
    </BrowserRouter>
  );
}

export default App;
