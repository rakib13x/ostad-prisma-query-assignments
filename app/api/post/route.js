import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  BigInt.prototype.toJSON = function () {
    return this.toString();
  };
  try {
    const prisma = new PrismaClient();
    let post_list = await prisma.posts.findMany();
    return NextResponse.json({ status: "success", data: post_list });
  } catch (e) {
    return NextResponse.json({ status: "fail", data: e.toString() });
  }
}

export async function POST(req, res) {
  BigInt.prototype.toJSON = function () {
    return this.toString();
  };

  try {
    const reqBody = await req.json();
    const prisma = new PrismaClient();
    let result = await prisma.posts.create({
      data: {
        autherId: 1,
        parentId: null,
        title: "Posts",
        metaTitle: "All-Posts",
        slug: "test-post",
        summary: "test post",
        content: "Hello-world",
      },
    });

    return NextResponse.json({ status: "success", data: result });
  } catch (error) {
    return NextResponse.json({ status: "fail", data: error.toString() });
  }
}

export async function PUT(req, res) {
  BigInt.prototype.toJSON = function () {
    return this.toString();
  };
  try {
    const prisma = new PrismaClient();
    let result = await prisma.posts.update({
      where: {
        id: 1,
      },
      data: {
        autherId: 1,
        parentId: null,
        title: "Posts-Update",
        metaTitle: "All-Posts-Update",
        slug: "test-post",
        summary: "test post",
        content: "Hello-World-again",
      },
    });
    return NextResponse.json({ status: "success", data: result });
  } catch (error) {
    return NextResponse.json({ status: "fail", data: error.toString() });
  }
}

export async function DELETE(req, res) {
  BigInt.prototype.toJSON = function () {
    return this.toString();
  };
  try {
    const prisma = new PrismaClient();
    const reqBody = await req.json();
    let result = await prisma.posts.delete({
      where: {
        id: 2,
      },
    });
    return NextResponse.json({ status: "success", data: result });
  } catch (e) {
    return NextResponse.json({ status: "fail", data: e.toString() });
  }
}
