import React from 'react';
function Input(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <h2>Search for a Book</h2>
      <input
        type="text"
        placeholder="Find A Book"
        onChange={props.onChange}
      />
      <input type="submit" />
    </form>
  )
}
export default Input;