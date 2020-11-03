import React from 'react';
import RandomCat from './RandomCat';
import Greetings from './Greetings';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <RandomCat/>
        <Greetings/>
      </div>
    );
  }
}


export default App;
