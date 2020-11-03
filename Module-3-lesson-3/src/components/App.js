import React from 'react';
import Greetings from './Greetings';
import CatList from './CatList';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Greetings/>
        <CatList/>
      </div>
    );
  }
}


export default App;
