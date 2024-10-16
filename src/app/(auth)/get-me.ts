"use server";
import { db } from "@/lib/db";
import { cookies } from "next/headers";
import * as jwt from "jsonwebtoken";
import { handleError } from "@/lib/utils";

export default async function getMe() {
  try {
    const token = cookies().get("auth")?.value;

    if (!token) {
      return { error: "No token provided" };
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET || "jwtSecret") as jwt.JwtPayload;

    if (!decoded?.userId) {
      return { error: "Invalid token" };
    }

    const user = await db.user.findUnique({
      where: { id: decoded.userId },
      select: {
        id: true,
        email: true,
        name: true,
      },
    });

    if (!user) {
      return { error: "User not found" };
    }
    return { user };
  } catch (error) {
    return handleError(error);
  }
}
