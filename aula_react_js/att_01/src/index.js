import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Button from './Button';
import './index.css';

function soma (a, b) {
  alert(a+b);
}

function App() {
  
  return (
    <div calssName="App">
      Hello World
      <Button onClick={() => soma(10, 20)} name="Marcus Cezar" />
    </div>
  )
}

const root = document.getElementById('root');
ReactDOM.render(<App />, root);

