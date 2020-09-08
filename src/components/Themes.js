import React, {useEffect, useState} from 'react';

const Themes = ({themes, populateFormThemeData}) => {

  const setSelectedWordClass = (theme) => {
    if(document.querySelector('.selected-theme')){
      document.querySelector('.selected-theme').className = "current-themes";
    }
    document.getElementById(theme.themeName).className += " selected-theme";
  }

  return(
    <div className="word-theme-list">
      <div>
        <h3>My Word Themes</h3>
        {
          themes ?
          themes.map((theme) => {
            return <div key={theme.themeId} id={theme.themeName} className="current-themes" onClick={() => {
              populateFormThemeData(theme)
              setSelectedWordClass(theme)
            }}>
              <p>{theme.themeName}</p>
            </div>
          }) :
          <p>No themes to show.</p>
        }
      </div>

      <div className="theme-buttons-container">
        <button id="new-theme-btn">New Theme</button>
        <button id="delete-theme-btn">Delete Theme</button>
      </div>
    </div>
  )
}

export default Themes;
