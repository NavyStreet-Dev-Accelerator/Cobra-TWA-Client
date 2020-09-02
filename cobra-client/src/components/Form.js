import React from 'react';

class Form extends React.Component {

  render(){
    return(
      <div className="search-form">
        <form>
          <label htmlFor="url">Enter a website URL</label>
          <input type="url" id="url"></input>
          <label htmlFor="words">Enter Your Words</label>
          <div className="add-word">
            <input type="text" id="add-word-input"></input>
            <button id="add-word-btn">Add</button>
          </div>
          <div className="current-theme-words">
            <p>This theme has no words</p>
          </div>
          <label htmlFor="themes">Enter A Theme Name</label>
          <input type="text"></input>
          <p id="captcha">Captcha will go here</p>
          <input type="submit" value="Save Theme & Scan Website"></input>
        </form>
      </div>
    )
  }
}

export default Form;
