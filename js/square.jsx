import React from 'react';
require('../styles/square.css');

function Square(props) {
  return (
    <button className="square" onClick={() => props.onClick()}>
      {props.value}
    </button>
  );
}

export default Square;
