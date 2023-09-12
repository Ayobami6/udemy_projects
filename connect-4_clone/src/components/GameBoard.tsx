import React from 'react'
import GameCircle from './GameCircle'

const GameBoard: React.FC = () => {
    return (
        <>
        <div><GameCircle id={1}><div>Red</div></GameCircle></div>
        <div><GameCircle id={2}>Blue</GameCircle></div>
        <div><GameCircle id={3}>Red</GameCircle></div>
        <div><GameCircle id={4}>Blue</GameCircle></div>
        <div><GameCircle id={5}>Red</GameCircle></div>
        <div><GameCircle id={6}>Blue</GameCircle></div>
        <div><GameCircle id={7}>Red</GameCircle></div>
        <div><GameCircle id={8}>Blue</GameCircle></div>
        </>
    )

}

export default GameBoard