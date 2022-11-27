import supabase from "./supabase";

export default async function handler(req, res) {
  return res.send(
    (await supabase.from("games").select().order("id", { ascending: false }))
      .data
  );
}
