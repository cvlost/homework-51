import React, {useState} from 'react';
import './App.css';
import Ball from "./Ball/Ball";

function App() {
  const getRandFromTo = (a: number, b: number) => Math.floor((Math.random() * (b - a + 1)) + a);

  const getNumbers = () => {
    const numbers: number[] = [];

    for (let i = 0; i < 5; i++) {
      let rand = getRandFromTo(5, 36);
      while (numbers.indexOf(rand) >= 0) rand = getRandFromTo(5, 36);
      numbers.push(rand);
    }

    numbers.sort((a, b) => a - b);
    return numbers;
  };

  const [numbers, setNumbers] = useState(getNumbers());

  const changeNewNumbers = () => setNumbers(getNumbers());

  return (
    <div className="App">
      <div className="balls-container">
        {numbers.map((number) => <Ball content={number} key={number}/>)}
      </div>
      <div className="controls">
        <button className="change-btn" onClick={changeNewNumbers}>New Numbers</button>
      </div>
    </div>
  );
}

export default App;
