import { create } from "zustand";

interface UIState {
  isMobileMenuOpen: boolean;
  isNavbarFixed: boolean;
  openMobileDropdown: string | null;
  setMobileMenuOpen: (open: boolean) => void;
  setNavbarFixed: (fixed: boolean) => void;
  setOpenMobileDropdown: (key: string | null) => void;
  toggleMobileDropdown: (key: string) => void;
}

export const useUIStore = create<UIState>((set) => ({
  isMobileMenuOpen: false,
  isNavbarFixed: false,
  openMobileDropdown: null,
  setMobileMenuOpen: (open) => set({ isMobileMenuOpen: open }),
  setNavbarFixed: (fixed) => set({ isNavbarFixed: fixed }),
  setOpenMobileDropdown: (key) => set({ openMobileDropdown: key }),
  toggleMobileDropdown: (key) =>
    set((state) => ({
      openMobileDropdown: state.openMobileDropdown === key ? null : key,
    })),
}));
