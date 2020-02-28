import React, {useState} from 'react';
import './App.css';
import Keypad from './components/keypad';

function App() {
  const [number, setNumber] = useState(null);
  return (
    <div className="App">
      {number}
      <Keypad setNumber={setNumber} />
        
    </div>
  );
}

export default App;
