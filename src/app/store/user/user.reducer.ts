import { createReducer, on } from '@ngrx/store';
import * as UserActions from './user.actions';
import { initialState } from './user.state';

export const userReducer = createReducer(
  initialState,
// Load Users
on(UserActions.loadUsers, (state) => ({ ...state, loading: true, error: null })),
on(UserActions.loadUsersSuccess, (state, { users }) => ({ ...state, users, loading: false })),
on(UserActions.loadUsersFailure, (state, { error }) => ({ ...state, loading: false, error })),
// Add
on(UserActions.addUserSuccess, (state, { user }) => ({ ...state, users: [...state.users, user] })),
// Update
on(UserActions.updateUserSuccess, (state, { user }) => ({
...state,
users: state.users.map(u => u.id === user.id ? user : u)
})),
// Delete
on(UserActions.deleteUserSuccess, (state, { id }) => ({
...state,
users: state.users.filter(u => u.id !== id)
})),
// Select
on(UserActions.selectUser, (state, { user }) => ({ ...state, selectedUser: user }))
);