import React from 'react';


const Book = (props) => (
  <div id="bookDetails">
    <h4>Title <br></br></h4>
    <h4>{props.book.title}</h4>
    <h4>Author <br></br> </h4>
    <h4>{props.book.author_name}</h4>
    <h4>Publisher <br></br> </h4>
    <h4>{props.book.publisher[0]}</h4>
    <h4>First Publish Year<br></br> </h4>
    <h4>{props.book.first_publish_year}</h4>
    
  </div>
)

export default Book;


