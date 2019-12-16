import React from 'react';
function Input(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <h1>Books!</h1>
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