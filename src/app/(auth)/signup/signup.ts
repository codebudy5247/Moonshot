"use server";
import { db } from "@/lib/db";
import { handleError } from "@/lib/utils";
import bcrypt from "bcrypt";

export default async function signup(formData: FormData) {
  const name = formData.get("name") as string | null;
  const email = formData.get("email") as string | null;
  const password = formData.get("password") as string | null;

  if (!name || !email || !password) {
    return {
      error: "All fields are required.",
    };
  }
  try {
    const existingUserByEmail = await db.user.findUnique({
      where: { email: email },
    });

    if (existingUserByEmail) {
      return {
        error: "User with this email already exists.",
      };
    }

    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(password, salt);
    await db.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });
    return { success: true };
  } catch (error) {
    handleError(error);
  }
  return { success: true };
}
