import React from 'react';
function BookImg(props) {
  const Img = "http://covers.openlibrary.org/b/isbn/0385472579-S.jpg" + props.data.data + ".jpg";
  return (
    <div>
      <h1>Search Results {props.data.data}</h1>
      {/* <p>Temperature: {props.data.data} </p> */}
      <img src={Img} alt="book icon" />
    </div>
  )
}
export default BookImg;