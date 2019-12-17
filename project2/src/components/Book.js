import React from 'react';

const Book = (props) => (
  <div>
    <h3>{props.book.title}</h3>
    {/* <p>{book.author_name.length ? book.author_name[0] : "no author"}</p> */}
  </div>
)

export default Book;


