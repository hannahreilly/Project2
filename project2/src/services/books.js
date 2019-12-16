import axios from 'axios';
export const fetchData = async (inputValue) => {
  const data = await axios.get(`http://openlibrary.org/search.json?title=${inputValue}`)
  return data;
}