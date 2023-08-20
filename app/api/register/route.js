import { PrismaClient } from "@prisma/client";
import { hash } from "bcrypt";
import { NextResponse } from "next/server";
const prisma = new PrismaClient();

export async function POST(request) {
  try {
    const { fName, lName, email, password } = await request.json();
    // hashing the password before sending to DB
    const hashedPassword = await hash(password, 12);
    // Check if user with the provided email already exists
    const existingUser = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (existingUser) {
      return NextResponse.json(
        { error: "Email Already Exist" },
        { status: 400 }
      );
    }

    // Create a new user
    const newUser = await prisma.user.create({
      data: {
        fName,
        lName,
        email,
        password: hashedPassword,
      },
    });

    // Disconnect Prisma client after use
    await prisma.$disconnect();
    return NextResponse.json({
      message: "User Created Successfully",
      user: newUser,
    });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
