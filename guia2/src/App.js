import React from 'react';
import './App.css';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <header className="App-content">
        <p>
          Aqui haremos nuestro TO-DO list
        </p>
        <Form />
      </header>
    </div>
  );
}

export default App;
