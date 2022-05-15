/**
 * Complete the following function
 * that can be used to mark a product
 * as out of stock
 * @param {number} productId the id of the product that is out of stuck
 */
import { ORIGIN } from "../config";

export const Update = async (productId = 0, value = "") => {
  const path = `tests/${productId}`;
  const body = {
    data: {
      testext: value,
    },
  };
  const url = encodeURI(`${ORIGIN}${path}`);
  const response = await fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  if (!response.ok) {
    throw new Error(`${response.status}: ${response.statusText}`);
  }
  const result = await response.json();
  console.log("update", result);
  return result;
};
