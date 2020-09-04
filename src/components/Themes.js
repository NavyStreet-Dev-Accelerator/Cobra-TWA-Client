import React from 'react';

const Themes = ({themes, populateFormThemeData}) => {
  // console.log(themes);

  return(
    <div className="word-theme-list">
      <div>
        <h3>My Word Themes</h3>
        {
          themes ?
          themes.map((theme) => {
            return <div key={theme.themeId} onClick={() => {
              populateFormThemeData(theme)
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
