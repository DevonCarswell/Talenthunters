import React from 'react';
import '../App.css';

function ReactComponent({onClick, text}) {
  return (
      <button className="button" onClick={onClick} variant="outlined">{text}  </button>
  );
}

export default ReactComponent;