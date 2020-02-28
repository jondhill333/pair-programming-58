import React, {useState} from 'react';
import Key from './key'


function Keypad({addToArray, calculate}) {
    
    const numbers = new Array(10).fill(0).map((number, i) => i);
    const operators = [
        {
            icon: "+",
            name: "add",
            value: (n1) => (n2) => n1 + n2
        },
        {
            icon: "*",
            name: "multiply",
            value: (n1) => (n2) => n1 * n2
        },
        {
            icon: "/",
            name: "divide",
            value: (n1) => (n2) => n1 / n2
        },
        {
            icon: "-",
            name: "minus",
            value: (n1) => (n2) => n1 - n2
        }
    ]
          
    const buttons = [
        ...numbers.map(n => <Key icon={n} click={() => addToArray(n) } /> ), 
    ...operators.map(({icon, value}) => <Key icon={icon} click={() => addToArray({icon, value}) } />)
    ];
    
  return (
    <div className="Keypad">
        {buttons}
        <Key icon={"="} click={calculate} />  
    </div>
  );
    
    
}

export default Keypad;