import { ORIGIN } from "../config";

export const Add = async (pathValue, content) => {
  const path = pathValue;
  const body = content;
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
