import { NextResponse } from "next/server";

let readerCount = 0;

export async function GET() {
    readerCount += 1
    return NextResponse.json({count: readerCount})
}