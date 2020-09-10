import React, {useState} from 'react';
import Header from './components/Header.js';
import Themes from './components/Themes.js';
import Form from './components/Form.js';
import Results from './components/Results.js';
import {useGetThemes} from './api';

const App = () => {
  const [themes] = useGetThemes();
  const [existingThemeData, setExistingThemeData] = useState(false);


  const populateFormThemeData = (themeData) => {
    setExistingThemeData(themeData)
  }


  return (
    <div className="container">
    <Header/>
    <main>
      <div className="theme-box">
        <Themes themes={themes} populateFormThemeData={populateFormThemeData}/>
      </div>
      <div className="form-box">
        <Form existingThemeData={existingThemeData}/>
      </div>
    </main>
    <Results/>

    </div>
  )
}

export default App;
