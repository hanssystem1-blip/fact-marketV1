
import { NextResponse ,NextRequest } from "next/server";
import { supabase } from "@/lib/supabase";

export async function GET() {
  const { data, error } = await supabase
  .from("produits")
  .select("*");
  if (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
  return NextResponse.json(data);
}


export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { nom, prix} = body;

    // Validation des champs requis
    if (!nom || !prix) {
      return NextResponse.json( { error: "Tous les champs sont requis" }, { status: 400 }
      );
    }
    const { data, error } = await supabase
      .from("produits")
      .insert([
        {
          nom,
          prix,
        },
      ])
      .select();

    if (error) {
      console.error("Erreur Supabase:", error);
      return NextResponse.json(
        { error: error.message },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { message: "Produit ajouté", data },
      { status: 201 }
    );
  } catch (error) {
    console.error("Erreur formulaire veuillez réessayer ", error);
    return NextResponse.json(
      { error: "Erreur serveur" },
      { status: 500 }
    );
  }
}