import axios from 'axios';
export const fetchData = async (input) => {
  const data = await axios.get(`http://openlibrary.org/search.json?q=${input}`)
  return data;
}

// export const imageData = async (input) => {
//   const imageData = await axios.get(`https://openlibrary.org/api/books?bibkeys=ISBN:0385472579,LCCN:62019420&format=json`)
//   return imageData;
// }