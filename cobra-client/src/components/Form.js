import React from 'react';

class Form extends React.Component {

  render(){
    return(
      <div className="search-form">
        <form>
          <label htmlFor="url">Enter a website URL</label>
          <input type="url" id="url"></input>
          <label htmlFor="words">Enter Your Words</label>
          <input type="text"></input>
          <button id="add-word">Add</button>
          <label htmlFor="themes">Enter A Theme Name</label>
          <input type="text"></input>
          <p>Captcha will go here</p>
          <input type="submit" placeholder="Save Theme & Scan Website"></input>
        </form>
      </div>
    )
  }
}

export default Form;
