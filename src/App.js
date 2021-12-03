import React, { useState } from 'react';
import './App.css';
import Form from './components/form';
import Gender from './components/gender';

function App() {

  const [gender, setgender] = useState();

  return (
    <div className={gender ? (gender === 'male') ? 'male App' : 'female App' : 'App'}>
      <Form set={setgender} />
      <Gender is={gender} />
      {
        gender ? <button className='clear' onClick={() => {setgender(undefined);}}>Clear</button> : null
      }
    </div>
  );
}

export default App;
