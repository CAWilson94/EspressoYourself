import React from 'react';
import latte from './lattesquareT.png';
import cortado from './cortadosquareT.png';

import './App.css';
import NavBarCoffee from './NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBarCoffee />
      <div className="Cortado">
        <img style={{ width: 626 }} src={cortado} alt="React Image" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >

        </a>
      </div>
      <div className="Latte">
        <img style={{ width: 626 }} src={latte} alt="React Image" />
      </div>
    </div>
  );
}

export default App;
