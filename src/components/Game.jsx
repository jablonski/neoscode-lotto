import { Index } from "solid-js";

import Field from "./Field";

export default function Game(props) {
  function toogle(num) {
    if (props.numbers().includes(num)) {
      props.setNumbers(props.numbers().filter((n) => n !== num));
    } else {
      if (props.numbers().length < 6) {
        props.setNumbers([...props.numbers(), num]);
      }
    }
  }

  function quicktipp() {
    const newNumbers = props.numbers().length === 6 ? [] : [...props.numbers()];
    while (newNumbers.length < 6) {
      const randomNumber = Math.ceil(49 * Math.random());
      if (!newNumbers.includes(randomNumber)) {
        newNumbers.push(randomNumber);
      }
    }
    props.setNumbers(newNumbers);
  }

  return (
    <>
      <div class="grid">
        <Index each={Array(49).fill(0)}>
          {(_, i) => (
            <Field
              label={String(i + 1)}
              selected={props.numbers().includes(i + 1)}
              onClick={() => {
                toogle(i + 1);
              }}
            />
          )}
        </Index>
      </div>
      <div>
        <button onClick={() => quicktipp()}>Quicktipp</button>
        <button
          disabled={props.numbers().length < 6}
          onClick={() => props.onSubmit()}
        >
          Fertig
        </button>
      </div>
    </>
  );
}
