import React, {useEffect, useState} from 'react';
import GetThemeData from '../api/';

const Themes = ({themes, populateFormThemeData}) => {

  return(
    <div className="word-theme-list">
      <div>
        <h3>My Word Themes</h3>
        {
          themes ?
          <GetThemeData populateFormThemeData={populateFormThemeData}/>
         :
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
