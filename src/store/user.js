import { writable } from "svelte/store";
const createCurrentUser = () => {
  const { set, subscribe } = writable("");
  return {
    subscribe,
    setCurrentUser: (current) => set(current),
  };
};
export const currentUser = createCurrentUser();
