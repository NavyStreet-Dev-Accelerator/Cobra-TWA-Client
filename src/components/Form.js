import React, {useEffect, useState} from 'react';
import useForm from '../utils/useForm.js';

const Form = ({existingThemeData}) => {
  const [themeName, setThemeName] = useState("");
  const [themeWords, setThemeWords] = useState([]);

  const [formValues, setFormValues, handleChange] = useForm();

  const buildThemeArray = async (event) => {
    event.preventDefault();
    const themeWord = document.getElementById('add-word-input').value
    // console.log(themeWord);
    await setThemeWords((themeWords) => (
        [
        ...themeWords, themeWord
        ]
      )
    )
    console.log(themeWords);
  }

  useEffect(() => {
    if(existingThemeData) {
      console.log(existingThemeData);
      setThemeWords(existingThemeData.themeWords)
    }
  })


  // console.log(existingThemeData);
  return(
    <div className="search-form">
      <form>
        <label htmlFor="url">Enter a website URL</label>
        <input type="url" id="url"></input>
        <label htmlFor="words">Enter Your Words</label>
        <div className="add-word">
          <input type="text" id="add-word-input" name="add-word-input"></input>
          <button id="add-word-btn" onClick={buildThemeArray}>Add</button>
        </div>
        <div className="current-theme-words-container">
          {themeWords.length > 0 ?
            themeWords.map((word, index) => {
              return <div className="current-theme-words" key={index}>
                <p>{word}</p>
              </div>
            })
          :
            <p className="no-theme-words">This theme has no words</p>
        }
        </div>
        <label htmlFor="themes">Enter A Theme Name</label>
        <input type="text" name="themeName" onChange={handleChange} value={formValues ? formValues.themeName : ""}/>
        <p id="captcha">Captcha will go here</p>
        <input type="submit" value="Save Theme & Scan Website"></input>
      </form>
    </div>
  )
}

export default Form;

// {existingThemeData ?
//   <input value={existingThemeData.themeName} type="text"/> :
//   <input onKeyUp={handleThemeNameInput} type="text"/>
// }
