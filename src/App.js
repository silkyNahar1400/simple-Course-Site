import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Header from './components/header/header.jsx';
import Body from './components/body/body.jsx';

function App() {
  return (
    <div className="App">
    <Header/>
    <Body/>
    </div>
  );
}

export default App;
