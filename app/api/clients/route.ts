import { NextResponse ,NextRequest } from "next/server";
import { supabase } from "@/lib/supabase";

export async function GET() {
  const { data, error } = await supabase
  .from("clients")
  .select("*");
  return NextResponse.json(data);
  if (error) {
    return NextResponse.json({ message: "error" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const data = await supabase
      .from("clients")
      .insert({ nom: body.nom, email: body.email, telephone: body.telephone })
      .select();
    console.log(data);
    return NextResponse.json({ message: "Utilisateur créé" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "error" }, { status: 500 });

    console.error("erreur formulaire", error);
  }
}
