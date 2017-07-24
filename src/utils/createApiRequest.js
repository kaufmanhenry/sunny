// eslint-disable-next-line
import { DARK_SKY_API_KEY } from 'react-native-dotenv';

const baseUrl = `https://api.darksky.net/forecast/${DARK_SKY_API_KEY}/`;

export default function createApiRequest(url, method, data) {
  return fetch(baseUrl + url, {
    method,
    body: data ? JSON.stringify(data) : null,
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .catch((error) => {
    throw error;
  });
}
