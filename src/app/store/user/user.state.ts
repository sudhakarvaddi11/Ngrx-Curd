import { User } from './user.model';

export interface UserState {
  users: User[];
  selectedUser: User | null;
}

export const initialState: UserState = {
  users: [],
  selectedUser: null
};
