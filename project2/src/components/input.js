import React from 'react';

function Input(props) {
  return (
    <div>
      <form onSubmit={props.onSubmit}>
        <input
          type="text"
          placeholder="Search Book Titles"
          onChange={props.onChange}
        />
        <input type="submit" />
      </form>

      <div id="bookRes">
        {props.renderBooks()}
      </div>
      <div className="border"></div>
    </div>
  )
}
export default Input;