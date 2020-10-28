const URL_API = "https://api.coincap.io/v2/assets/?limit=10";

export function getMoney() {
  return fetch(URL_API).then((response) => response.json())
    .then(result => result.data );
}
