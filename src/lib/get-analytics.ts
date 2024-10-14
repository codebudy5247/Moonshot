import { getErrorMessage } from "./error";

export const getAnalytics = async () => {
  const res = await fetch(`http://localhost:3000/api/analytics`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const parsedRes = await res.json();
  if (!res.ok) {
    return { error: getErrorMessage(parsedRes) };
  }
  return parsedRes;
};
