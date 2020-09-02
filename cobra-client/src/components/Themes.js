import React from 'react';

class Themes extends React.Component {

  render(){
    return(
      <div className="word-theme-list">
        <h3>My Word Themes</h3>
        <p>No themes to show.</p>

        <button>New Theme</button>
        <button>Delete Theme</button>
      </div>
    )
  }
}

export default Themes;
