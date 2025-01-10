import { NextResponse } from "next/server";
import db from "@/lib/prisma";
import { getServerSession } from "next-auth";


export async function PATCH(
  request: Request,
  { params }: { params: { reportId: string } }
) {
  const id = params.reportId;
  try {
    const session = await getServerSession();
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { status } = await request.json();
    const report = await db.report.update({
      where: { id: id },
      data: { status },
    });

    return NextResponse.json(report);
  } catch (error) {
    console.log("Error updating report ", error);

    return NextResponse.json(
      { error: "Error updating report" },
      { status: 500 }
    );
  }
}
