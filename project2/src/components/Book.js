import React from 'react';


const Book = (props) => (
  <div id="bookDetails">
    <h3>Title <br></br></h3>
    <h4>{props.book.title}</h4>
    <h3>Author <br></br> </h3>
     <h4>{props.book.author_name}</h4>
    <h3>Publisher <br></br> </h3>
    <h4>{props.book.publisher[0]}</h4>
    <h3>First Publish Year<br></br> </h3>
    <h4>{props.book.first_publish_year}</h4>
    
  </div>
)

export default Book;


