import React from 'react'
import '../Game.css'

const onClick = (id): void => {
    alert("On Click Just happened!" + id);
}

const GameCircle: React.FC = ({ id, children}) => {
  return (
    <div className={`gamecircle ${id % 2 === 0 ? 'even' : 'odd' }`} onClick={() => onClick(id)}>
    {children}
    </div>
  )
}

export default GameCircle