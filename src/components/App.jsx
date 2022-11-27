import { createSignal, Match, Switch } from "solid-js";
import Summary from "./Summary";

import Form from "./Form";
import Game from "./Game";

export default function App() {
  const [numbers, setNumbers] = createSignal([]);
  const [step, setStep] = createSignal("Game");

  return (
    <main class="container">
      <h1 class="headline">Neoscode-Challenge #1</h1>
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
        class="button restart"
        disabled={numbers().length === 0}
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
