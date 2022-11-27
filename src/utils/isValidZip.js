/**
 * @param {string} zip
 */
export default async function isValidZip(zip) {
  if (zip.length !== 5) {
    return "Die Postleitzahl ist nicht korrekt eingegeben";
  }
  const { nhits } = await (
    await fetch(
      `https://public.opendatasoft.com/api/records/1.0/search/?dataset=georef-germany-postleitzahl&q=${zip}`
    )
  ).json();
  return nhits !== 1 ? "Die Postleitzahl existiert nicht" : "";
}
