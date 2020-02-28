import React from 'react';
import Key from './key'


function Keypad(props) {
    const numbers = new Array(10).fill(0).map((number, i) => i);
    const operators = [
        {
            icon: "+",
            name: "add",
            operator: (n1, n2) => n1 + n2
        },
        {
            icon: "*",
            name: "multiply",
            operator: (n1, n2) => n1 * n2
        },
        {
            icon: "/",
            name: "divide",
            operator: (n1, n2) => n1 / n2
        },
        {
            icon: "-",
            name: "minus",
            operator: (n1, n2) => n1 - n2
        }
    ]
    const buttons = [
        ...numbers.map(n => <Key func={() => props.setNumber(n)} name={"btn" + n } icon={n}/> ), 
    ...operators.map(({icon, name, operator}) => <Key name={"btn"+name} icon={icon} func={operator} />)
    ];
    
  return (
    <div className="Keypad">
    {buttons}
    
   
    </div>
  );
    
    
}

export default Keypad;