import { handlers } from "@/auth";
import { NextRequest } from "next/server";

export async function GET(request: Request) {
  const req = request as NextRequest;
  return await handlers.GET(req);
}

export async function POST(request: Request) {
  const req = request as NextRequest;
  return await handlers.POST(req);
}
