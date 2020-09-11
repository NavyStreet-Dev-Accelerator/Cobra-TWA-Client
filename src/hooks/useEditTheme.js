import { editTheme } from "../api/index.js";

export const useEditTheme = (event) => {
  event.preventDefault();

  const themeName = document.getElementById("theme-name").value;
  const themeWordsNodeList = document.querySelectorAll("p.words-in-theme");
  const themeWordsArray = [];
  //all the words are returned in a node list so need a for loop to get their text value
  for (let i = 0; i < themeWordsNodeList.length; i++) {
    themeWordsArray.push(themeWordsNodeList[i].textContent);
  }

  const userId = "1234567";
  const themeId = "1234";
  const themeObject = {
    themeName: themeName,
    themeWords: themeWordsArray,
  };

  editTheme(userId, themeId, themeObject);
};
