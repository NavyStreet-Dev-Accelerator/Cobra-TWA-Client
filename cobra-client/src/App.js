import React from 'react';
import Header from './components/Header.js';
import Form from './components/Form.js';
import Results from './components/Results.js';

class App extends React.Component {

  render(){
    return (
      <div className="App">
        <Header/>
        <Form/>
        <Results/>
      </div>
    );
  }

}

export default App;
