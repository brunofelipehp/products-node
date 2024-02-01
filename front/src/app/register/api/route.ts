import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  const res = await fetch(`http://localhost:3333/product/${id}`);

  const product = await res.json();

  if (!res.ok) throw new Error("Problemas com fetch");

  return NextResponse.json({ product });
}
