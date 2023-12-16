
import './App.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';


function App() {

  const[amount,setAmount]=useState(0);
  const[year,setYear]=useState(0);
  const[rate,setRate]=useState(0);

  const[interest,setInterest]=useState(0);

  const calculate=(e)=>{
    const output=amount*year*rate/100;
    setInterest(output);
  }
const reset=(e)=>{
  setInterest(0);
  setAmount(0);
  setRate(0);
  setYear(0);
}
  return (
    <div className="App">
    <div className="container">
      <div className="header">
        <h1>Simple Interest Calculator</h1>
        <p>Calculate your simple interest with us ❤️</p>
      </div>
      
      <div className="total">
        <h3>₹ {interest}</h3>
        <p>Your total interest</p>
      </div>

      <div className="form">
        <form>
          <div className="input">
          <TextField id="filled-basic" label="Amount" value={amount||""} onChange={(e)=>setAmount(e.target.value)} variant="standard" /><br />
          <TextField id="outlined-basic" label="Year" value={year||""} onChange={(e)=>setYear(e.target.value)} variant="standard" /><br />
          <TextField id="standard-basic" label="Rate" value={rate||""} onChange={(e)=>setRate(e.target.value)} variant="standard" />
          </div>
          <div className="button">
          <Button variant="contained" onClick={e=>calculate(e)}>Calculate</Button>
          <Button variant="outlined" onClick={e=>reset(e)}>Reset</Button>
          </div>
        </form>
      </div>

    </div>
    </div>
  );
}

export default App;
