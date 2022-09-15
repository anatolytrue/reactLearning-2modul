import React from "react";


const Controls = ({ onIncrement, onDecrement }) => (
    <div className="Counter__controls">
                    <button type="button" onClick={onIncrement}>Increase by 1</button>
                    <button type="button" onClick={onDecrement}>Reduse by 1</button>
                </div>
) 


export default Controls;