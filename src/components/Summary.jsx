import { createSignal, For, onMount, Show } from "solid-js";

export default function Summary() {
  const [data, setData] = createSignal([]);

  onMount(async () => {
    setData(await (await fetch("/api/summary")).json());
  });

  return (
    <Show when={data().length > 0} fallback={<div class="loader"></div>}>
      <table class="summary">
        <For each={data()}>
          {({ id, vorname, nachname, plz, zahlen }) => (
            <>
              <tr>
                <td>{id}</td>
                <td>{vorname}</td>
                <td>{nachname}</td>
                <td>{plz}</td>
              </tr>
              <tr>
                <td colspan="4">
                  {zahlen
                    ? zahlen.map((zahl) => <span class="bubble">{zahl}</span>)
                    : ""}
                </td>
              </tr>
            </>
          )}
        </For>
      </table>
    </Show>
  );
}
