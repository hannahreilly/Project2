import React from 'react';

function Input(props) {
  return (
    <div>
      <form onSubmit={props.onSubmit}>
        <h2>Search for a Book</h2>
        <input
          type="text"
          placeholder="Find A Book"
          onChange={props.onChange}
        />
        <input type="submit" />
      </form>

      <div id="bookRes">
        {props.renderBooks()}
      </div>
    </div>
  )
}
export default Input;