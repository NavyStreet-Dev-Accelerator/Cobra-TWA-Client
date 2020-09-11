import {createTheme} from '../api/index.js';

export const useEditTheme = (event) => {
    event.preventDefault();

    const themeName = document.getElementById('theme-name').value
    const themeWordsNodeList = document.querySelectorAll('p.words-in-theme')
    const themeWordsArray = []
    //all the words are returned in a node list so need a for loop to get their text value
    for(let i = 0; i < themeWordsNodeList.length; i++){
      themeWordsArray.push(themeWordsNodeList[i].textContent);
    }

    const themeObject = {
      userId: "1234567",
      themeId: "1234",
      themeName: themeName,
      themeWords: themeWordsArray
    }

    createTheme(themeObject)
  }
