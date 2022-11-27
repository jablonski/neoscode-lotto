import { createSignal, Match, Switch } from "solid-js";
import Summary from "./Summary";

import Form from "./Form";
import Game from "./Game";

export default function App() {
  const [numbers, setNumbers] = createSignal([]);
  const [step, setStep] = createSignal("Game");

  return (
    <main>
      <h1>Neoscode &ndash; Solid.js & Supabase</h1>
      <Switch>
        <Match when={step() === "Game"}>
          <Game
            numbers={numbers}
            setNumbers={setNumbers}
            onSubmit={() => setStep("Form")}
          />
        </Match>
        <Match when={step() === "Form"}>
          <Form numbers={numbers} onSubmit={() => setStep("Summary")} />
        </Match>
        <Match when={step() === "Summary"}>
          <Summary />
        </Match>
      </Switch>
      <button
        class="restart"
        onClick={() => {
          setNumbers([]);
          setStep("Game");
        }}
      >
        Restart
      </button>
    </main>
  );
}
