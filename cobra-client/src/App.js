import React from 'react';
import Header from './components/Header.js';
import Themes from './components/Themes.js';
import Form from './components/Form.js';
import Results from './components/Results.js';

class App extends React.Component {

  render(){
    return (
      <div className="container">
        <Header/>
        <main>
          <div className="theme-box">
            <Themes/>
          </div>
          <div className="form-box">
            <Form/>
          </div>
        </main>
        <Results/>
      </div>
    );
  }

}

export default App;
