import axios from 'axios'

const BASE_URL = 'https://youtube-v31.p.rapidapi.com'

const options = {
  params: {
    maxResults: '50',
  },
  headers: {
    'X-RapidAPI-Key': '631d60a9d3msh6012c703ba80b11p1c0cdcjsn99aa9ebb0878',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};


// Allows us to call from API, pass dynamic url, and call it from any component in App
export const fetchFromAPI = async (url) => {
  const {data} = await axios.get(`${BASE_URL}/${url}`,
  options);

  return data;
}