/* eslint-disable @typescript-eslint/no-explicit-any */
type Ifetcher = {
  method: string;
  endpoint: string;
  data?: any;
};

const BASE_URL = "http://localhost:3000/api/v1";
export const fetcher = async ({ method, endpoint, data }: Ifetcher) => {
  const url = `${BASE_URL}/${endpoint}`;
  const options = {
    method,
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "appliation/json",
    },
  };
  if (method === "GET") {
    const initRes = await fetch(url);
    const res = await initRes.json();
    return res;
  } else {
    const initRes = await fetch(url, options);
    const res = await initRes.json();
    return res;
  }
};
