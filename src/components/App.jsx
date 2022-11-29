import { createSignal, Match, Switch } from "solid-js";
import { setStore, store } from "../store";
import Form from "./Form";
import Game from "./Game";
import Summary from "./Summary";

export default function App() {
  const [step, setStep] = createSignal("Game");

  return (
    <main class="container">
      <h1 class="headline">Neoscode-Challenge #1</h1>
      <Switch>
        <Match when={step() === "Game"}>
          <Game onSubmit={() => setStep("Form")} />
        </Match>
        <Match when={step() === "Form"}>
          <Form onSubmit={() => setStep("Summary")} />
        </Match>
        <Match when={step() === "Summary"}>
          <Summary />
        </Match>
      </Switch>
      <button
        class="button restart"
        disabled={store.numbers.length === 0}
        onClick={() => {
          setStore({ numbers: [] });
          setStep("Game");
        }}
      >
        Restart
      </button>
    </main>
  );
}
