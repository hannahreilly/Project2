import axios from 'axios';
export const fetchData = async (input) => {
  const data = await axios.get(`http://openlibrary.org/search.json?q=${input}`)
  return data;
}

// export const fetchData1 = async (input) => {
//   const data1 = await axios.get(`http://covers.openlibrary.org/b/olid/OL7440033M-S.jpg`)
//   return data1;
// }