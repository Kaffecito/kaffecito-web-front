import { create } from 'zustand';

interface AppState {
  // Definir el estado global aquí
  isAuthenticated: boolean;
  setAuthenticated: (value: boolean) => void;
}

export const useAppStore = create<AppState>((set) => ({
  isAuthenticated: false,
  setAuthenticated: (value) => set({ isAuthenticated: value }),
})); 