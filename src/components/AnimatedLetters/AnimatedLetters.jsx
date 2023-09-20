import React from 'react';
import './animatedLetters.css';

const AnimatedLetters = ({ sentence }) => {
  return (
    <span className='neon'>
      {sentence}
    </span>
  )
}

export default AnimatedLetters