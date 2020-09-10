import React, { useState, useEffect } from "react";
import axios from 'axios';

const GetThemeData = ({populateFormThemeData}) => {

  const [themes, setThemes] = useState([]);
  let userId = 2

  useEffect(() => {
    let ignore = false;
    let userId = 1234567;

    async function fetchData() {
      const result = await axios('https://e9cwrrxvuc.execute-api.us-west-2.amazonaws.com/beta/user/' + userId);
      console.log(result.data.Items);
      if (!ignore) setThemes(result.data.Items);
    }

    fetchData();
    return () => { ignore = true; }
  }, []);

  const setSelectedWordClass = (theme) => {
    if(document.querySelector('.selected-theme')){
      document.querySelector('.selected-theme').className = "current-themes";
    }
    document.getElementById(theme.themeName).className += " selected-theme";
  }

  return (
    <>
    {
      themes.map((theme) => {
        return <div key={theme.themeId} id={theme.themeName} className="current-themes" onClick={() => {
            setSelectedWordClass(theme)
            populateFormThemeData(theme)
          }}
      >
        <p>{theme.themeName}</p>
      </div>
      })
    }
    </>
  );
}

export default GetThemeData;
