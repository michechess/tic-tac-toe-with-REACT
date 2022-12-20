import React from 'react';
import Square from './Square';

export default function Board({ squares, onClick }){
        return(
            <div className="board">
            {squares.map((square, i) => {
                return(
                    <Square onClick={() => onClick(i)} value={square}/>
                )
            })
        }
            </div>
            
        )
}