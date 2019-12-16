import React from 'react';
function BookImg(props) {
  const Img = "https://openlibrary.org/api/books?bibkeys=ISBN:0385472579,LCCN:62019420&format=json" + props.data.data + ".jpg";
  return (
    <div>
      <h1>Search Results {props.data.data}</h1>
      <p> Title: {props.data.entries} </p>
      <img src={Img} alt="book icon" />
    </div>
  )
}
export default BookImg;