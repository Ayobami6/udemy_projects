import React from 'react';
import '../Game.css';

const GameCircle: React.FC = ({ id, children, circleClick, className }) => {
  return (
    <div className={`gamecircle ${className} `} onClick={() => circleClick(id)}>
      {children}
    </div>
  );
};

export default GameCircle;
