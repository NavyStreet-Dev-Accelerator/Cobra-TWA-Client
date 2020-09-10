import React, {useEffect, useState} from 'react';
import Header from './components/Header.js';
import Themes from './components/Themes.js';
import Form from './components/Form.js';
import Results from './components/Results.js';
import axios from 'axios';
// import useGetThemeData from './api';

const App = () => {
  // const [fetchThemes, setFetchThemes] = useGetThemeData()
  const [themes, setThemes] = useState(false);
  const [existingThemeData, setExistingThemeData] = useState(false);
  const userId = '1234567';


  const populateFormThemeData = (themeData) => {
    setExistingThemeData(themeData)
  }

  // useEffect(() => {
  //   const fetchData = async () => {
  //     console.log(userId);
      // const themeData = await useGetThemeData(userId)
      //   setThemes(themeData);
      //   console.log(themeData);
  //   }
  //   fetchData()
  // }, [])

  useEffect(() => {
  axios.get('https://e9cwrrxvuc.execute-api.us-west-2.amazonaws.com/beta/user/1234567').then((response) => {
    // console.log(response.data);
    setThemes(response.data.Items)
    })
  }, [])






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
