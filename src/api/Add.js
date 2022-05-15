import { ORIGIN } from "../config";

export const Add = async (text) => {
  const path = "tests";
  const body = {
    data: {
      testext: text,
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
  const result = await response.json();
  console.log("add", result);
  return result;
};