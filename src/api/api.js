export const URL_API = "https://api.coincap.io/v2/assets/?limit=10";

export let cryptoFromServer;

export async function getCrypto() {
  const response = await fetch(URL_API)
  const result = await response.json();

  cryptoFromServer = result.data;
  return result.data;
}

getCrypto();
