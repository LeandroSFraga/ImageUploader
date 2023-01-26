import { User } from 'types/user';
import { create } from 'zustand';

export interface UserState {
  user: User;
  removeUser: () => void;
}

const useUserStore = create<UserState>((set) => ({
  user: {
    _id: '',
    bio: '',
    email: '',
    phone: '',
    profilePicture: '',
    username: '',
  },
  removeUser: () => set({}, true),
}));

export { useUserStore };
