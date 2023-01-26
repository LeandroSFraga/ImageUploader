import { User } from 'types/user';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface UserState {
  user: User;
  removeUser: () => void;
}

export const useUserStore = create(
  persist<UserState>(
    (set) => ({
      user: {
        _id: '',
        bio: '',
        email: '',
        phone: '',
        profilePicture: '',
        username: '',
      },
      removeUser: () => set({}, true),
    }),
    {
      name: 'user-store',
    }
  )
);
