import {useState, useEffect } from "react";
import {getThemes, createTheme} from './index.js';

export const useGetThemes = () => {
      const [themes, setThemes] = useState([]);

      useEffect(() => {
        let userId = 1234567;

        async function fetchData() {
          const result = await getThemes(userId);
          setThemes(result);
        }

        fetchData();
        return () => {}
      }, [themes]);

      return (
        [themes]
      );
  }

export const usePostTheme = (event) => {
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
