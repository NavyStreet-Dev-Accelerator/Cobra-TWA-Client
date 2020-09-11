import React, { useEffect, useState } from "react";
import { usePostTheme } from "../hooks/usePostTheme.js";
import { useEditTheme } from "../hooks/useEditTheme.js";

const Form = ({ existingThemeData }) => {
  const [themeName, setThemeName] = useState("");
  const [themeWords, setThemeWords] = useState([]);

  const buildThemeArray = async (event) => {
    event.preventDefault();
    const themeWord = document.getElementById("add-word-input").value;
    await setThemeWords((themeWords) => [...themeWords, themeWord]);
    document.getElementById("add-word-input").value = "";
  };

  const deleteThemeWord = (index) => {
    console.log(index);
    themeWords.splice(index, 1);
    setThemeWords((themeWords) => [...themeWords]);
  };

  useEffect(() => {
    if (existingThemeData) {
      setThemeWords(existingThemeData.themeWords);
      setThemeName(existingThemeData.themeName);
    }
  }, [existingThemeData]);

  // console.log(existingThemeData);
  return (
    <div className="search-form">
      <form onSubmit={existingThemeData ? useEditTheme : usePostTheme}>
        <label htmlFor="url">Enter a website URL</label>
        <input type="url" id="url"></input>
        <label htmlFor="words">Enter Your Words</label>
        <div className="add-word">
          <input type="text" id="add-word-input" name="add-word-input"></input>
          <button id="add-word-btn" onClick={buildThemeArray}>
            Add
          </button>
        </div>
        <div className="current-theme-words-container">
          {themeWords.length > 0 ? (
            themeWords.map((word, index) => {
              return (
                <div className="current-theme-words" key={index}>
                  <div className="delete-btn-words-container">
                    <button
                      className="delete-btn-words"
                      onClick={() => {
                        deleteThemeWord(index);
                      }}
                    >
                      X
                    </button>
                  </div>
                  <p className="words-in-theme">{word}</p>
                </div>
              );
            })
          ) : (
            <p className="no-theme-words">This theme has no words</p>
          )}
        </div>
        <label htmlFor="themes">Enter A Theme Name</label>
        <input
          type="text"
          name="themeName"
          defaultValue={themeName ? themeName : ""}
          id="theme-name"
        />
        <p id="captcha">Captcha will go here</p>
        <input type="submit" value="Save Theme & Scan Website"></input>
      </form>
    </div>
  );
};

export default Form;
