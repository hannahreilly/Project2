import React from "react";

function Form(props) {
  return (
    <div id="form-area">
      <form onSubmit={props.handleSubmit}>
        <h2>Search for a book</h2>
        <input onChange={props.handleChange} name="name" type="text" placeholder="name" />
        <select onChange={props.handleChange} name="chonkyness" type="text" placeholder="chonkyness" defaultValue="Chonkyness Level">
          <option disabled>Chonkyness Level</option>
          <option>A Fine Boi</option>
          <option>He Chomnk</option>
          <option>A Heckin' Chonker</option>
          <option>Hefty Chonk</option>
          <option>Mega Chonker</option>
          <option>Oh Lawd He Comin'</option>
        </select>
        <input onChange={props.handleChange} name="imagelink" type="text" placeholder="image link" />
        <textarea onChange={props.handleChange} name="biography" type="text" placeholder="biography" ></textarea>
        <input type="submit" />
      </form>
    </div>
  )
}

export default Form;