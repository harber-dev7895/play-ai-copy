import { create, StateCreator } from "zustand";
import { persist, PersistOptions } from "zustand/middleware";

interface UserState {
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
}

type MyPersist = (config: StateCreator<UserState>, options: PersistOptions<UserState>) => StateCreator<UserState>;

const useUserStore = create<UserState>(
  (persist as MyPersist)(
    (set) => ({
      isLoggedIn: false,
      login: () => set(() => ({ isLoggedIn: true })),
      logout: () => set(() => ({ isLoggedIn: false })),
    }),
    {
      name: "user-state", // ชื่อ key ที่ใช้ใน Local Storage
    }
  )
);

export { useUserStore };
