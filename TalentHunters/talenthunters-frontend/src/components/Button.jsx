import React from 'react';

function ReactComponent({onClick, text}) {
  return (
      <button onClick={onClick} variant="outlined">{text} </button>
  );
}

export default ReactComponent;