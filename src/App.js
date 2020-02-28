import React, {useState} from 'react';
import './App.css';
import Keypad from './components/keypad';
import Display from './components/display';

function App() {
  const [arr, setArr] = useState([]);   
    const addToArray = (v) => setArr([...arr, v])
    
    const calculate = () => {
        let accumulator = ""
        let operation = null
        for (let i=0;i<=arr.length;i++) {
            const v = arr[i];
            if(Number.isInteger(v)) {
              accumulator += v
            } 
            else {
              if (!operation){
                operation = v.value(parseInt(accumulator, 10)) 
              } 
              else {
                setArr([operation(parseInt(accumulator, 10))]);
                operation = null
              } 
              accumulator = "" 
            }
        }
    }


  return (
    <div className="App">
      <Display output={arr.map(v => typeof v === "object" ? v.icon : v)} />
      <Keypad addToArray={addToArray} calculate={calculate} />
    </div>
  );
}

export default App;
