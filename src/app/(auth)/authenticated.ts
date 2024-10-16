import { cookies } from "next/headers";

export default function authenticated() {
  return !!cookies().get("auth")?.value;
}
