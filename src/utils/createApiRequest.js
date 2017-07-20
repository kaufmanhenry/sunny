const baseUrl = 'https://api.darksky.net/forecast/';

export function createApiRequest(url, method, data) {
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
