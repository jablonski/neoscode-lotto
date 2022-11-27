import { createSignal } from "solid-js";

import isValidZip from "../utils/isValidZip";

export default function Form(props) {
  const [vorname, setVorname] = createSignal("");
  const [nachname, setNachname] = createSignal("");
  const [plz, setPlz] = createSignal("");
  const [error, setError] = createSignal("");
  const [loading, setLoading] = createSignal(false);

  async function submit() {
    setLoading(true);
    setError("");
    if (vorname() === "" || nachname() === "" || plz() === "") {
      setError("Alle Felder sind erforderlich!");
    } else {
      const zipValidation = await isValidZip(plz());
      if (zipValidation) {
        setError(zipValidation);
      } else {
        await fetch("/api/submit", {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          method: "POST",
          body: JSON.stringify({
            vorname: vorname(),
            nachname: nachname(),
            plz: plz(),
            zahlen: props.numbers(),
          }),
        });
        props.onSubmit();
      }
    }
    setLoading(false);
  }

  return (
    <section class="form">
      <input
        class="input"
        type="text"
        name="vorname"
        placeholder="Vorname"
        onInput={(e) => setVorname(e.currentTarget.value)}
      />
      <input
        class="input"
        type="text"
        name="nachname"
        placeholder="Nachname"
        onInput={(e) => setNachname(e.currentTarget.value)}
      />
      <input
        class="input"
        type="text"
        name="plz"
        placeholder="PLZ"
        onInput={(e) => setPlz(e.currentTarget.value)}
      />
      {error() && <div class="error">{error()}</div>}
      <button class="button" disabled={loading()} onClick={submit}>
        Absenden
      </button>
    </section>
  );
}
