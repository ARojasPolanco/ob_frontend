
import { create } from "zustand";

const useAuthStore = create((set) => ({
  isLoggedIn: false,
  isAdmin: false,

  loginAsAdmin: () =>
    set({ isLoggedIn: true, isAdmin: true }),

  loginAsUser: () =>
    set({ isLoggedIn: true, isAdmin: false }),

  logout: () =>
    set({ isLoggedIn: false, isAdmin: false }),
}));

export default useAuthStore;
