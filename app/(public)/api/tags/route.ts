import { NextResponse } from "next/server";
import { articles } from "@/app/data/articles";
const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
};
export async function GET() {
    const tags = articles.flatMap((article) => article.tags);
    return NextResponse.json(tags,
        {
            headers: corsHeaders,
        });
}
export async function OPTIONS() {
    return NextResponse.json({}, {
        headers: corsHeaders,
    });
}