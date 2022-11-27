import { createSignal, For, onMount } from "solid-js";
import supabase from "../utils/supabase";

export default function Summary() {
  const [data, setData] = createSignal([]);

  onMount(async () => {
    setData(
      (await supabase.from("games").select().order("id", { ascending: false }))
        .data
    );
  });

  return (
    <section>
      {
        <table>
          <For each={data()}>
            {({ id, vorname, nachname, plz, zahlen }) => (
              <tr>
                <td>{id}</td>
                <td>{vorname}</td>
                <td>{nachname}</td>
                <td>{plz}</td>
                <td>
                  {zahlen
                    ? zahlen.map((zahl) => <span class="number">{zahl}</span>)
                    : ""}
                </td>
              </tr>
            )}
          </For>
        </table>
      }
    </section>
  );
}
