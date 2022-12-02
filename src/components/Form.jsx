import { createSignal, Show } from "solid-js";
import { setStore, store } from "../store";
import isValidZip from "../utils/isValidZip";

export default function Form(props) {
  const [error, setError] = createSignal("");
  const [loading, setLoading] = createSignal(false);

  function isSubmitDisabled() {
    return (
      loading() ||
      store.firstname === "" ||
      store.lastname === "" ||
      store.zip === ""
    );
  }

  async function submit() {
    setLoading(true);
    setError("");
    const zipValidation = await isValidZip(store.zip);
    if (zipValidation) {
      setError(zipValidation);
    } else {
      await fetch(`${import.meta.env.VITE_SUPABASE_URL}/rest/v1/games`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_KEY}`,
          apiKey: import.meta.env.VITE_SUPABASE_KEY,
        },
        body: JSON.stringify(store),
      });
      props.onSubmit();
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
        onInput={(e) => setStore({ firstname: e.currentTarget.value })}
      />
      <input
        class="input"
        type="text"
        name="nachname"
        placeholder="Nachname"
        onInput={(e) => setStore({ lastname: e.currentTarget.value })}
      />
      <input
        class="input"
        type="text"
        name="plz"
        placeholder="PLZ"
        onInput={(e) => setStore({ zip: e.currentTarget.value })}
      />
      <Show when={error()}>
        <div class="error">{error()}</div>
      </Show>
      <button class="button" disabled={isSubmitDisabled()} onClick={submit}>
        Absenden
      </button>
    </section>
  );
}
