import axios from 'axios';
export const fetchData = async (input) => {
  const data = await axios.get(`http://openlibrary.org/search.json?q=${input}`)
  return data;
}