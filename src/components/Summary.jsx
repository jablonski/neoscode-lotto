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
          {({ id, firstname, lastname, zip, numbers }) => (
            <>
              <tr>
                <td>{id}</td>
                <td>{firstname}</td>
                <td>{lastname}</td>
                <td>{zip}</td>
              </tr>
              <tr>
                <td colspan="4">
                  {numbers
                    ? numbers.map((num) => <span class="bubble">{num}</span>)
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
