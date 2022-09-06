import React from 'react';
import '../App.css';

function ReactComponent({onClick, text, disabled}) {
  return (
      <button disabled={disabled} className="button" onClick={onClick} variant="outlined">{text} </button>
  );
}

export default ReactComponent;