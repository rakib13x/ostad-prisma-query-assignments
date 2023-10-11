import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET() {
  BigInt.prototype.toJSON = function () {
    return this.toString();
  };
  try {
    const prisma = new PrismaClient();
    let category_list = await prisma.categories.findMany();
    return NextResponse.json({ status: "success", data: category_list });
  } catch (error) {
    return NextResponse.json({ status: "success", data: error.toString() });
  }
}

export async function POST(req, res) {
  BigInt.prototype.toJSON = function () {
    return this.toString();
  };

  try {
    const reqBody = await req.json();
    const prisma = new PrismaClient();
    let category = await prisma.categories.createMany({
      data: [
        {
          title: "Pant",
          parentId: 0,
          metaTitle: "All Pants",
          slug: "pants",
          content: "pants",
        },
        {
          title: "shirts",
          parentId: 1,
          metaTitle: "All  shirts",
          slug: "shirts",
          content: "shirts",
        },
        {
          title: "t-shirts",
          parentId: 1,
          metaTitle: "All kind of t-shirts",
          slug: "t-shirts",
          content: "t-shirts",
        },
      ],
    });
    return NextResponse.json({ status: "success", data: category });
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
    let result = await prisma.categories.update({
      where: {
        id: 3,
      },
      data: {
        title: "Cloth",
        parentId: 1,
        metaTitle: "All cloths",
        slug: "cloths",
        content: "cloths",
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
    let result = await prisma.categories.delete({
      where: reqBody,
    });
    return NextResponse.json({ status: "success", data: result });
  } catch (e) {
    return NextResponse.json({ status: "fail", data: e.toString() });
  }
}
