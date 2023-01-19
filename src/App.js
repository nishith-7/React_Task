import React, { useState } from 'react';
import './App.css';
import {Counter,Total} from './components/Counter';

// state data for 3 counters
// const data = [
//   { id: 1, value: 0 },
//   { id: 2, value: 0 },
//   { id: 3, value: 0 }
// ];

// const Total = (props) =>{
//   return (
//     <div class="total">
//       {props.value}
//     </div>
//   )
// }

// Counter Component


function App () {

  // setting data for all buttons
  const [data, setData] = useState([
     { id: 1, value: 0 },
     { id: 2, value: 0 },
     { id: 3, value: 0 },
     { id: 4, value: 0 }
  ]);

  // variable for saving total of all counters
  let total = 0;
  return (<div>
    {
        data.map((counter) => {
        total += counter.value;

        const temp = (value) => {
          
        //creating copy so there's no change in the original state
        const newArr = [...data];                          
        newArr[newArr.indexOf(counter)].value = value;
        setData(newArr);
      }

      return (
        <Counter key = {counter.id} value = {counter.value}
         
         temp = {temp}
         />
      )
    })}

    <Total value={total} />

  </div>);
}
export default App;
