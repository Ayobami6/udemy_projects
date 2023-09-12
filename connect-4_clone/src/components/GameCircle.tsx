import React from 'react'


const onClick = (): void => {
    alert("On Click Just happened!");
}

const GameCircle: React.FC = ({ id, children}) => {
  return (
    <div onClick={onClick}>
    {children}
    </div>
  )
}

export default GameCircle