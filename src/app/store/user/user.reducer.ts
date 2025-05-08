import { createReducer, on } from '@ngrx/store';
import { addUser, deleteUser, selectUser, updateUser } from './user.actions';
import { initialState } from './user.state';


export const userReducer = createReducer(
  initialState,
  on(addUser, (state, { user }) => ({
    ...state,
    users: [...state.users, user],
    selectedUser: null
  })),
  on(deleteUser, (state, { id }) => ({
    ...state,
    users: state.users.filter(u => u.id !== id)
  })),
  on(selectUser, (state, { id }) => ({
    ...state,
    selectedUser: state.users.find(u => u.id === id) || null
  })),
  on(updateUser, (state, { user }) => ({
    ...state,
    users: state.users.map(u => u.id === user.id ? user : u),
    selectedUser: null
  }))
);
