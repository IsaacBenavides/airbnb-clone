import { create } from "zustand";

interface State {
  isLoading?: boolean;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  toogleIsLoading: () => void;
}

export const useRegisterModal = create<State>((set) => ({
  isLoading: false,
  isOpen: false,
  onClose: () => set({ isOpen: false }),
  onOpen: () => set({ isOpen: true }),
  toogleIsLoading: () => set((prev) => ({ isLoading: !prev.isLoading })),
}));
