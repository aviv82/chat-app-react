/**
 * Complete the following function that
 * removes the product with the given id
 */
import { ORIGIN } from "../config";

export const Delete = async (productId) => {
  const path = `tests/${productId}`;
  const url = encodeURI(`${ORIGIN}${path}`);
  const response = await fetch(url, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    throw new Error(`${response.status}: ${response.statusText}`);
  }
  const result = await response.json();
  console.log("delete", result);
  return result;
};
