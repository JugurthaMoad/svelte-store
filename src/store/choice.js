import { writable } from "svelte/store";

const createCurrentGender = () => {
  const { set, subscribe } = writable("Femme");
  return {
    subscribe,
    setCurrentGender: (current) => set(current),
  };
};

export const currentGender = createCurrentGender();
