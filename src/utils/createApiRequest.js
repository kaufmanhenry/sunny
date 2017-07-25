// eslint-disable-next-line
import { DARK_SKY_API_KEY } from 'react-native-dotenv';

const baseUrl = `https://api.darksky.net/forecast/${DARK_SKY_API_KEY}/`;

export default function createApiRequest(url, method, data) {
  return new Promise((resolve, reject) => {
    fetch(baseUrl + url, {
      method: method || 'GET',
      body: data ? JSON.stringify(data) : null
    })
    .then(response => resolve(response.json()))
    .catch(err => reject(err));
  });
}
