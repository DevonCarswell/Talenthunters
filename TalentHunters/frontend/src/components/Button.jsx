import React from 'react';
import '../App.css';

const Button = ({onClick, text, disabled}) => {
  return (
      <button disabled={disabled} className="button" onClick={onClick} variant="outlined">{text} </button>
  );
}

export default Button;