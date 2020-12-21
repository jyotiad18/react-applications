
import React, { useState } from 'react';
import './App.css';
import data from './data';
import Question from './Question';

function App() {
  const [questions, setQuestions] = useState(data);

  return (
    <div className="container">  
      {
        questions && questions.map(({ title, info }) => (          
          <Question title={title} info={info} />
        ))  
      }
    </div>
  );
}

export default App;
