import React, {useEffect, useState} from 'react';
import Header from './components/Header.js';
import Themes from './components/Themes.js';
import Form from './components/Form.js';
import Results from './components/Results.js';
import axios from 'axios';

const App = () => {
  const [themes, setThemes] = useState(false);
  const [existingThemeData, setExistingThemeData] = useState(false);

  useEffect(() => {
    axios.get('https://e9cwrrxvuc.execute-api.us-west-2.amazonaws.com/beta/user/1234567').then((response) => {
      // console.log(response.data);
      setThemes(response.data.Items)
    })
  }, [])

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
