require('./domEvents.js');
require('../styles/css/main.css');

import React from 'react';
import ReactDOM from 'react-dom';
import Game from './game';

ReactDOM.render(
  <Game />,
  document.getElementById('container')
);
