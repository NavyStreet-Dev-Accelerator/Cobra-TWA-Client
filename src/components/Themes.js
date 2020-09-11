import React, {useState} from 'react';

const Themes = ({themes, populateFormThemeData}) => {
  const [deleteMode, setDeleteMode] = useState(false)

  const toggleDeleteMode = (event) => {
    event.preventDefault();
    setDeleteMode(!deleteMode)
  }

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
                setSelectedWordClass(theme)
                populateFormThemeData(theme)
              }}
          >

            <div id="delete-btn-container">
            {
              deleteMode ?
              <button id="delete-btn">X</button>
              :
              ""
            }
            </div>

            <p>{theme.themeName}</p>
          </div>
          })
         :
          <p>No themes to show.</p>
        }
      </div>

      <div className="theme-buttons-container">
        <button id="new-theme-btn">New Theme</button>
        <button id="delete-mode-btn" onClick={toggleDeleteMode}>Delete Theme</button>
      </div>
    </div>
  )
}

export default Themes;
