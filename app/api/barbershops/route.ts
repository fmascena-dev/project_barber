import { db } from "@/app/_lib/prisma"
import { NextResponse } from "next/server"

export async function GET() {
  const barbershops = await db.barbershop.findMany({})
  return NextResponse.json(barbershops)
}
