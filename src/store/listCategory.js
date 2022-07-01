import { writable } from "svelte/store";
const categories = new Map();
categories.set("Femme", ["Sacs", "Robes", "Haut", "Bas"]);
categories.set("Homme", ["Chemise", "Jeans", "Haut", "Bas"]);
categories.set("Enfant", ["Haut", "Bas", "Ensemble", "Autres"]);
categories.set("Autres", ["Promos", "Haut", "Bas", "Autres"]);

const createCurrentList = () => {
  const { set, subscribe } = writable(categories.get("Femme"));
  return {
    subscribe,
    setCurrentList: (gender) => set(categories.get(gender)),
  };
};

export const currentList = createCurrentList();

const createCurrentItem = () => {
  const { set, subscribe } = writable("");
  return {
    subscribe,
    setCurrentItem: (item) => set(item),
  };
};

export const currentItem = createCurrentItem();
