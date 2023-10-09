import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
export async function GET() {
  // create data
  // try {
  //   let prisma = new PrismaClient();
  //   // insert data
  //   const result = await prisma.user.create({
  //     data: {
  //       firstName: "Mr.",
  //       middleName: "Jayanta",
  //       lastName: "Mondal",
  //       mobile: "01758317096",
  //       email: "jayanta551905@gmail.com",
  //       passwordHash: "1234567890",
  //       intro:
  //         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, voluptatem?",
  //       profile:
  //         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, ipsa quam? Minima repellat ut mollitia earum, at atque nemo quidem cupiditate perspiciatis voluptas, eaque illo dolore quae. At, a placeat.",
  //     },
  //   });
  //   return NextResponse.json({ msg: "success", data: result });
  // } catch (error) {
  //   return NextResponse.json({ msg: "fail", data: error });
  // }

  // update data
  // try {
  //   let prisma = new PrismaClient();
  //   const result = await prisma.user.update({
  //     where: {
  //       id: 1,
  //     },
  //     data: {
  //       firstName: "Mr.",
  //       middleName: "Susanto",
  //       lastName: "Biswas",
  //       mobile: "0170000000000",
  //       email: "susanto@gmail.com",
  //     },
  //   });
  //   return NextResponse.json({ msg: "success", data: result });
  // } catch (error) {
  //   return NextResponse.json({ msg: "fail", data: error });
  // }

  // delete data
  // try {
  //   let prisma = new PrismaClient();
  //   const result = await prisma.user.delete({
  //     where: { id: 1 },
  //   });
  //   return NextResponse.json({ msg: "success", data: result });
  // } catch (error) {
  //   return NextResponse.json({ msg: "fail", data: error });
  // }

  // read data
  try {
    let prisma = new PrismaClient();
    const result = await prisma.user.findMany({
      where: { email: "jayanta551905@gmail.com" },
      select: {
        email: true,
      },
    });
    return NextResponse.json({ msg: "success", data: result });
  } catch (error) {
    return NextResponse.json({ msg: "fail", data: error });
  }
}
