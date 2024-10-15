import { getErrorMessage } from "./error";

export const getAnalytics = async (
  age?: string | null,
  gender?: string | null,
  startDate?: string | null,
  endDate?: string | null
) => {
  const params = new URLSearchParams();

  if (age) params.append("age", age);
  if (gender) params.append("gender", gender);
  if (startDate) params.append("startDate", startDate);
  if (endDate) params.append("endDate", endDate);

  const queryString = params.toString();
  const url = `http://localhost:3000/api/analytics${
    queryString ? `?${queryString}` : ""
  }`;

  console.log(url,"URL Request...");
  
  const res = await fetch(url, {
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
