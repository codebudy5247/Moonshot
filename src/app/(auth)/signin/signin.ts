"use server";
import { db } from "@/lib/db";
import { cookies } from "next/headers";
import { compareSync } from "bcrypt";
import * as jwt from "jsonwebtoken";
import { handleError } from "@/lib/utils";

export default async function signin(formData: FormData) {
  const email = formData.get("email") as string | null;
  const password = formData.get("password") as string | null;

  if (!email || !password) {
    return { error: "All fields are required." };
  }

  try {
    const user = await db.user.findFirst({ where: { email } });
    if (!user) {
      return { error: "User not found." };
    }

    if (!compareSync(password, user.password)) {
      return { error: "Incorrect password." };
    }

    const token = jwt.sign(
      { userId: user.id },
      process.env.JWT_SECRET || "jwtSecret",
      {
        expiresIn: "24h",
      }
    );

    setAuthCookie(token);
    return { success: true };
  } catch (error) {
    return handleError(error);
  }
}

const setAuthCookie = (token: string) => {
  cookies().set({
    name: "auth",
    value: token,
    secure: process.env.NODE_ENV === "production",
    httpOnly: true,
    path: "/",
    expires: new Date(Date.now() + 24 * 60 * 60 * 1000), // 24 hours
  });
};
