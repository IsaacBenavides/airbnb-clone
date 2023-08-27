import { create } from "zustand";

interface State {
  isOpen?: boolean;
  toogleIsOpen: () => void;
}

export const useUserMenu = create<State>((set) => ({
  isOpen: false,
  toogleIsOpen: () => {
    set((prev) => ({ isOpen: !prev.isOpen }));
  },
}));
