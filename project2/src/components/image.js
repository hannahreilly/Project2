import React from 'react';
function BookImg(props) {
  const Img = "https://openlibrary.org/api/books?bibkeys=ISBN:0385472579,LCCN:62019420&format=json" + props.data.data + ".jpg";
  return (
    <div>
      <h1>Search Results {props.data.docs.title}</h1>
      <p> Title: {props.data.title} </p>
      <img src={Img} alt="book icon" />
    </div>
  )
}
export default BookImg;