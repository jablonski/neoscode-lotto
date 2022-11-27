import supabase from "./_supabase";

export default async function handler(req, res) {
  const { vorname, nachname, plz, zahlen } = req.body;
  await supabase.from("games").insert({
    vorname,
    nachname,
    plz,
    zahlen,
  });
  return res.send({ success: true });
}
