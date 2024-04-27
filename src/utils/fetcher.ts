/* eslint-disable @typescript-eslint/no-explicit-any */
type Ifetcher = {
  method: string;
  endpoint: string;
  data?: any;
};

const BASE_URL = "http://localhost:3000/api/v1";
export const fetcher = async ({ method, endpoint, data }: Ifetcher) => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify(data);

  const requestOptions = {
    method: method,
    headers: myHeaders,
    body: raw,
  };

  const url = `${BASE_URL}/${endpoint}`;
  if (method === "GET") {
    const initRes = await fetch(url);
    const res = await initRes.json();
    return res;
  } else {
    const initRes = await fetch(url, requestOptions);
    const res = await initRes.json();
    return res;
  }
};
