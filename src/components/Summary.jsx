import { createSignal, For, onMount } from "solid-js";

export default function Summary() {
  const [data, setData] = createSignal([]);

  onMount(async () => {
    setData(await (await fetch("/api/summary")).json());
  });

  return (
    <table class="summary">
      {data().length === 0 && (
        <tr>
          <td>Loading...</td>
        </tr>
      )}
      <For each={data()}>
        {({ id, vorname, nachname, plz, zahlen }) => (
          <tr>
            <td>{id}</td>
            <td>{vorname}</td>
            <td>{nachname}</td>
            <td>{plz}</td>
            <td>
              {zahlen
                ? zahlen.map((zahl) => <span class="bubble">{zahl}</span>)
                : ""}
            </td>
          </tr>
        )}
      </For>
    </table>
  );
}
