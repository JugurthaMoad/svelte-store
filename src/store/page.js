import { writable } from "svelte/store";

const createStore = () => {
  const { set, subscribe } = writable("/");
  return {
    subscribe,
    changePage: (path) => set(path),
  };
};

export const currentPage = createStore();
