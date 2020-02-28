import React, {useState} from 'react';
import './App.css';
import Keypad from './components/keypad';
import Display from './components/display';

function App() {
  const [arr, setArr] = useState([]);
  const  [output, setOutput] = useState("");   
    
    const addToArray = (v) => setArr([...arr, v])
    
    const calculate = () => {
        let accumulator = ""
        let operation = null
        for(let v of arr) {
            if(Number.isInteger(v)) {
                accumulator += v
            } else {
                if(operation){
                    operation(parseInt(accumulator, 10))
                    operation = null
                } else {
                   operation = v(parseInt(accumulator, 10)) 
                } 
               accumulator = "" 
            }
        }
        
        
    }
  
  return (
    <div className="App">
      <Display output={output} />
      <Keypad addToArray={addToArray} />
        
    </div>
  );
}

export default App;
