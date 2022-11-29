import { createStore } from "solid-js/store";

const [store, setStore] = createStore({
  firstname: "",
  lastname: "",
  zip: "",
  numbers: [],
});

export { store, setStore };
