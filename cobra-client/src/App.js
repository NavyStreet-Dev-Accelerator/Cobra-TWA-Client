import React from 'react';
import Header from './components/Header.js';
import Results from './components/Results.js';

class App extends React.Component {

  render(){
    return (
      <div className="App">
        <Header/>
        <Results/>
      </div>
    );
  }

}

export default App;
