import React from 'react'
import GameCircle from './GameCircle'
import '../Game.css'

const GameBoard: React.FC = () => {
    
    return (
        <>
        <div className="gameboard">
        <div><GameCircle id={1}><div style={{ color: 'red'}}></div></GameCircle></div>
        <div><GameCircle id={2}></GameCircle></div>
        <div><GameCircle id={3}><div style={{ color: 'red'}}></div></GameCircle></div>
        <div><GameCircle id={4}></GameCircle></div>
        <div><GameCircle id={5}></GameCircle></div>
        <div><GameCircle id={6}></GameCircle></div>
        <div><GameCircle id={7}></GameCircle></div>
        <div><GameCircle id={8}></GameCircle></div>
        <div><GameCircle id={1}><div style={{ color: 'red'}}></div></GameCircle></div>
        <div><GameCircle id={2}></GameCircle></div>
        <div><GameCircle id={3}><div style={{ color: 'red'}}></div></GameCircle></div>
        <div><GameCircle id={4}></GameCircle></div>
        <div><GameCircle id={5}></GameCircle></div>
        <div><GameCircle id={6}></GameCircle></div>
        <div><GameCircle id={7}></GameCircle></div>
        <div><GameCircle id={8}></GameCircle></div>
        </div>
        
        </>
    )

}

export default GameBoard