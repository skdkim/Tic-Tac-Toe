require('./domEvents.js');
require('../styles/main.css');
// require('../styles/square.css');

import React from 'react';
import ReactDOM from 'react-dom';
import Game from './game';

ReactDOM.render(
  <Game />,
  document.getElementById('container')
);
