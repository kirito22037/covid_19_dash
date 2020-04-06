import React from 'react';

import Heading from './components/heading';
import OverallStat from "./components/overAll";
import Countrys from "./components/countrys";

import './App.css';

class App extends React.Component {
  render()
  {

  return (
    <div className="App">
      <Heading/>
      <OverallStat/>

      <Countrys/>      
    </div>
  );
  }
}
//
export default App;
