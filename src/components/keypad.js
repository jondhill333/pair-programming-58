import React from 'react';
import Key from './key'


function Keypad () {
    
    const numbers = new Array(10).fill(0).map((number, i) => i);
    const operators = [
        {
            icon: "+",
            operator: (n1, n2) => n1 + n2
        },
        {
            icon: "*",
            operator: (n1, n2) => n1 * n2
        },
        {
            icon: "/",
            operator: (n1, n2) => n1 / n2
        },
        {
            symbol: "-",
            operator: (n1, n2) => n1 - n2
        }
    ]
    const buttons = numbers.map(n => <Key name={"btn" + n } icon={n}/> )
    
    
  return (
    <div className="Keypad">
    {buttons}
    
   
    </div>
  );
    
    
}

export default Keypad;