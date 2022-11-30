import supabase from "./_supabase";

export default async function handler(req, res) {
  return res.send(await supabase.from("games").insert(req.body));
}
