import { ORIGIN } from "../config";

export const Add = async (pathValue, name, pass) => {
  const path = pathValue;
  const body = {
    data: {
      userName: name,
      password: pass,
      // isLoggedIn: true
    },
  };
  const url = encodeURI(`${ORIGIN}${path}`);
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  if (!response.ok) {
    throw new Error(`${response.status}: ${response.statusText}`);
  }
  const result = await response.json();
  console.log("add", result);
  return result;
};
