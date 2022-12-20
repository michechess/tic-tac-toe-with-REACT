import React, { useState } from 'react';
import { calculateWinner } from '../calculateWinner';
import Board from './Board';

export default function Game(){
    
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [nextStep, setNextStep] = useState(0);
    const [xIsNext, setXIsNext] = useState(true);

    const winner = calculateWinner(history[nextStep]);    
    const x0 = xIsNext ? 'X' : 'O';

    const handleClick = (i) => {

        const historyPoint = history.slice(0,nextStep + 1);
        const current = historyPoint[nextStep];
        const squares = [...current];
        
        if (winner || squares[i]) return;
        squares[i] = x0;

        setHistory([...historyPoint, squares]);
        setNextStep(historyPoint.length);
        setXIsNext(!xIsNext);
    }

    const renderHistory = () => history.map((_step, move) => {
            
            const buttonName = move ? 'Go to number ' + move : 'Go to START';

            return(<li key={move}>
                <button onClick={() => jumpTo(move)}>{buttonName}</button>
                </li>)            
        }
        )

    const jumpTo = (move) => {
        setNextStep(move);
        setXIsNext(move % 2 === 0)
    }

    return(
        <>
        <h3>TIC TAC TOE</h3>
        <Board onClick={handleClick} squares={history[nextStep]}/>
        <div className="info-wrapper">
        <div>
        <h3>HISTORY</h3>
        {renderHistory()}
        </div>
        <h3>{winner ? 'Winner is ' + winner : 'Next Player: ' + x0}</h3>
        </div>
        </>
    )
}