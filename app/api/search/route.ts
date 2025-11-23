// Server-side throttling
// Route Handler
export const dynamic = "force-dynamic";
import { getBlogsBySearch } from "@/service/search.service";
import { NextResponse } from "next/server";

let lastCall = 0;

export async function POST(req: Request) {
  const now = Date.now();
  if (now - lastCall < 200) {
    return NextResponse.json({ blogs: [] });
  }
  lastCall = now;

  const { q } = await req.json();
  const blogs = await getBlogsBySearch(q);
  return NextResponse.json({ blogs });
}