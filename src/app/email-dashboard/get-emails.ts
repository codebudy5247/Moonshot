import { getErrorMessage } from "@/lib/error";

const API_URL = "https://flipkart-email-mock.now.sh/";
export const getEmails = async (page: number) => {
  const res = await fetch(`${API_URL}/?page=${page}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  const parsedRes = await res.json();
  if (!res.ok) {
    return { error: getErrorMessage(parsedRes) };
  }
  return parsedRes;
};
