import React from 'react';
import './App.scss';
import { BarChart } from './components/BarChart';

function App() {
  return (
    <div className="app">
      <BarChart className="app__block" points={[10, 20, 30, 15, 25, 40]} />
      <BarChart
        className="app__block"
        points={[7, 100, 30, 45, 23, 23, 74, 11, 23]}
      />
    </div>
  );
}

export default App;
