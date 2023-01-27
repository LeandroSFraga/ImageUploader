import { User } from 'types/user';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface UserState {
  user: User;
}

export const useUserStore = create(
  persist<UserState>(
    () => ({
      user: {
        id: '',
        bio: '',
        email: '',
        phone: '',
        profilePicture: '',
        username: '',
      },
    }),
    {
      name: 'user-store',
    }
  )
);
