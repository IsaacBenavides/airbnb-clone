import { create } from "zustand";

interface State {
  hasMounted?: boolean;
  setHasMounted: () => void;
}

export const useClientOnly = create<State>((set) => ({
  hasMounted: false,
  setHasMounted: () =>
    set((_) => ({
      hasMounted: true,
    })),
}));
