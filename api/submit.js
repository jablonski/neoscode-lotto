import supabase from "./supabase";

export default async function handler(req, res) {
  console.log(req);
  const { vorname, nachname, plz, zahlen } = req.body;
  await supabase.from("games").insert({
    vorname,
    nachname,
    plz,
    zahlen,
  });
  return res.send({ success: true });
}
