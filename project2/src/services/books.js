import axios from 'axios';
export const fetchData = async(inputValue) => {
  const data = await axios.get(`https://openlibrary.org/api/books?bibkeys=${inputValue}ISBN:9780980200447&jscmd=details&format=json`)
  return data;
}