import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
export async function GET(req, res) {
  BigInt.prototype.toJSON = function () {
    return this.toString();
  };
  try {
    const prisma = new PrismaClient();
    let users = await prisma.users.findMany();
    return NextResponse.json({ status: "success", data: users });
  } catch (e) {
    return NextResponse.json({ status: "fail", data: e.toString() });
  }
}

export async function POST(req, res) {
  BigInt.prototype.toJSON = function () {
    return this.toString();
  };
  try {
    const prisma = new PrismaClient();
    const reqBody = await req.json();
    const user = await prisma.users.create({
      data: reqBody,
    });
    return NextResponse.json({ status: "success", data: user });
  } catch (e) {
    return NextResponse.json({ status: "fail", data: e.toString() });
  }
}

export async function PUT(req, res) {
  BigInt.prototype.toJSON = function () {
    return this.toString();
  };
  try {
    const prisma = new PrismaClient();
    let result = await prisma.users.update({
      where: {
        id: 1,
      },
      data: {
        firstName: "Rakib",
        lastName: "Islam",
        mobile: "01647347347",
        email: "demo@gmail.com",
        passwordHash: "%#%$#$87587395/46783647cdnjh7887",
        registeredAt: "2023-10-10",
        lastLogin: null,
        intro: null,
        profile: null,
      },
    });
    return NextResponse.json({ status: "success", data: result });
  } catch (e) {
    return NextResponse.json({ status: "fail", data: e.toString() });
  }
}

export async function DELETE(req, res) {
  BigInt.prototype.toJSON = function () {
    return this.toString();
  };
  try {
    const prisma = new PrismaClient();
    const reqBody = await req.json();
    let result = await prisma.users.delete({
      where: reqBody,
    });
    return NextResponse.json({ status: "success", data: result });
  } catch (e) {
    return NextResponse.json({ status: "fail", data: e.toString() });
  }
}
