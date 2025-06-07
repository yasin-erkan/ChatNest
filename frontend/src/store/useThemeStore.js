import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("ChatNest-theme") || "synthwave",
  setTheme: (theme) => {
    localStorage.setItem("ChatNest-theme", theme);
    set({ theme });
  },
}));
