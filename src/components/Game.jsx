import { Index } from "solid-js";
import { setStore, store } from "../store";

import Field from "./Field";

export default function Game(props) {
  function toogle(num) {
    if (store.numbers.includes(num)) {
      setStore({ numbers: store.numbers.filter((n) => n !== num) });
    } else {
      if (store.numbers.length < 6) {
        setStore({ numbers: [...store.numbers, num] });
      }
    }
  }

  function quicktipp() {
    const newNumbers = store.numbers.length === 6 ? [] : [...store.numbers];
    while (newNumbers.length < 6) {
      const randomNumber = Math.ceil(49 * Math.random());
      if (!newNumbers.includes(randomNumber)) {
        newNumbers.push(randomNumber);
      }
    }
    setStore({ numbers: newNumbers });
  }

  return (
    <>
      <div class="grid">
        <Index each={Array(49).fill(0)}>
          {(_, i) => (
            <Field
              label={String(i + 1)}
              selected={store.numbers.includes(i + 1)}
              onClick={() => {
                toogle(i + 1);
              }}
            />
          )}
        </Index>
      </div>
      <div>
        <button class="button" onClick={() => quicktipp()}>
          Quicktipp
        </button>
        <button
          class="button"
          disabled={store.numbers.length < 6}
          onClick={() => props.onSubmit()}
        >
          Weiter
        </button>
      </div>
    </>
  );
}
