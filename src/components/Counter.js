//import { toBePartiallyChecked } from '@testing-library/jest-dom/dist/matchers';
import React from 'react'


//function for counting all buttons independently
function Counter(props) {
    return (
        <div>
            <div className="counter">
                <b>{props.value}</b>
                <div className="controls">
                <button className="button is-danger is-small" onClick={() => props.temp(props.value - 1)}>-</button>
                <button className="button is-success is-small" onClick={() => props.temp(props.value + 1)}>+</button> 
                </div>
            </div>
            
    
        </div>
    )
    
        
}

// function for keeping track of total of all buttons
function Total(props) {
    return(
    <div className = "total">
        Total : {props.value}
    </div>
    )
    
}

export {Counter,Total};
// export default Total;